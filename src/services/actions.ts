"use server"

import { revalidatePath } from "next/cache"
import { createMeal } from "./meals"
import { redirect } from "next/navigation"
import { z } from "zod"

const schema = z.object({
    slug: z.string().optional(),
    title: z
        .string({
            message: "Title must be between 3 and 100 characters long",
            invalid_type_error: "Title must be a string",
        })
        .min(3, "Title must be at least 3 characters long")
        .max(100, "Title must be at most 100 characters long")
        .trim(),
    summary: z
        .string({
            message: "Summary must be between 10 and 500 characters long",
            invalid_type_error: "Summary must be a string",
        })
        .min(10, "Summary must be at least 10 characters long")
        .max(500, "Summary must be at most 500 characters long")
        .trim(),
    instructions: z
        .string({
            message:
                "Instructions must be between 10 and 10000 characters long",
            invalid_type_error: "Instructions must be a string",
        })
        .min(10, "Instructions must be at least 10 characters long")
        .max(10000, "Instructions must be at most 10000 characters long"),
    creator: z
        .string({
            message: "Name must be between 3 and 100 characters long",
            invalid_type_error: "Name must be a string",
        })
        .min(3, "Name must be at least 3 characters long")
        .max(100, "Name must be at most 100 characters long")
        .trim(),
    creator_email: z
        .string({
            message: "Email must be a valid email address",
            invalid_type_error: "Email must be a string",
        })
        .email()
        .trim(),
    image: z.instanceof(File, {
        message: "Image must be a file (jpg, jpeg, or png)",
    }),
})

export async function shareMeal(prevState: any, formData: FormData) {
    const validatedMeal = schema.safeParse({
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        creator: formData.get("name"),
        creator_email: formData.get("email"),
        image: formData.get("image"),
    })

    if (!validatedMeal.success) {
        return {
            errors: validatedMeal.error.issues,
        }
    }

    const meal = validatedMeal.data

    await createMeal(meal)
    revalidatePath("/meals")
    redirect("/meals")
}
