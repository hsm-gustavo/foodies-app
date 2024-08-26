import style from "@/app/meals/page.module.css"
import MealsGrid from "@/components/meals/meals-grid"
import { getMeals } from "@/services/meals"
import Link from "next/link"
import { Suspense } from "react"

export const metadata = {
    title: "All Meals",
    description: "Browse the delicious meals shared by our vibrant community",
}

/* Realizes the fetch and acts as the component that needs fetching */
async function Meals() {
    const meals = await getMeals()
    return <MealsGrid meals={meals} />
}

export default function MealsPage() {
    return (
        <>
            <header className={style.header}>
                <h1>
                    Delicious meals, created{" "}
                    <span className={style.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy
                    and fun!
                </p>
                <p className={style.cta}>
                    <Link href={"/meals/share"}>
                        Share Your Favorite Recipe
                    </Link>
                </p>
            </header>
            <main className={style.main}>
                <Suspense
                    fallback={
                        <p className={style.loading}>Fetching meals...</p>
                    }
                >
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}
