export async function getMeals() {
    const response = await fetch(`${process.env.API_URL}/meal`)
    return response.json()
}

export async function getMeal(slug: string) {
    const response = await fetch(`${process.env.API_URL}/meal/${slug}`)
    return response.json()
}

export async function createMeal(meal: {
    slug: string
    title: string
    image: string
    summary: string
    instructions: string
    creator: string
    creator_email: string
}) {
    const response = await fetch(`${process.env.API_URL}/meal`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(meal),
    })

    return response.json()
}
