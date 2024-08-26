"use server"

import { revalidatePath } from "next/cache"
import { createMeal } from "./meals"
import { redirect } from "next/navigation"

export async function shareMeal(formData: FormData) {

    const meal = {
        slug: undefined,
        title: formData.get("title") as string,
        summary: formData.get("summary") as string,
        instructions: formData.get("instructions") as string,
        creator: formData.get("name") as string,
        creator_email: formData.get("email") as string,
        image: formData.get("image") as File,
    }

    await createMeal(meal)
    revalidatePath("/meals")
    redirect("/meals")
}