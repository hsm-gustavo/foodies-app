import style from "@/app/meals/[slug]/page.module.css"
import { getMeal } from "@/services/meals"
import Image from "next/image"
import { notFound } from "next/navigation"
import { title } from "node:process"

export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}) {
    const meal = await getMeal(params.slug)

    if (!meal) {
        notFound()
    }
    
    return {
        title: meal.title,
        description: meal.summary,
    }
}

export default async function MealDetailsPage({
    params,
}: {
    params: { slug: string }
}) {
    const meal = await getMeal(params.slug)

    if (!meal) {
        notFound()
    }

    meal.instructions = meal.instructions.replace(/\n/g, "<br>")

    return (
        <>
            <header className={style.header}>
                <div className={style.image}>
                    <Image src={meal.image} alt={meal.title} fill />
                </div>
                <div className={style.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={style.creator}>
                        by{" "}
                        <a href={`mailto:${meal.creator_email}`}>
                            {meal.creator}
                        </a>
                    </p>
                    <p className={style.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p
                    className={style.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions,
                    }}
                ></p>
            </main>
        </>
    )
}
