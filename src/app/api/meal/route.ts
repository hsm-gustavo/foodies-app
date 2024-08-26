import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(req: NextRequest) {
    const {
        slug,
        title,
        image,
        summary,
        instructions,
        creator,
        creator_email,
    } = await req.json()

    const meal = await prisma.meal.create({
        data: {
            slug,
            title,
            image,
            summary,
            instructions,
            creator,
            creator_email,
        },
    })

    return NextResponse.json(meal)
}

export async function GET(req: NextRequest) {
    // await new Promise((resolve) => setTimeout(resolve, 5000))
    /* Arbitrary load simulation, not supposed to be in final code */
    const meals = await prisma.meal.findMany()
    return NextResponse.json(meals)
}