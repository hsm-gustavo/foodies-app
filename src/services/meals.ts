"use server"

import slugify from "slugify"
import xss from "xss"
import fs from "node:fs"

export async function getMeals() {
    const response = await fetch(`${process.env.API_URL}/meal`)
    return response.json()
}

export async function getMeal(slug: string) {
    const response = await fetch(`${process.env.API_URL}/meal/${slug}`)
    return response.json()
}

export async function createMeal(meal: {
    slug: undefined | string
    title: string
    image: File | string
    summary: string
    instructions: string
    creator: string
    creator_email: string
}) {

    meal.image = meal.image as File

    meal.slug = slugify(meal.title, {lower: true})
    meal.instructions = xss(meal.instructions)
    
    const extension = meal.image.name.split(".").pop()
    const fileName = `${meal.slug}.${extension}`

    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage = await meal.image.arrayBuffer()

    stream.write(Buffer.from(bufferedImage), (error) => {
        if(error) {
            throw new Error("Saving image failed!")
        }
    })

    meal.image = `/images/${fileName}`

    const response = await fetch(`${process.env.API_URL}/meal`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(meal),
    })

    return response.json()
}
