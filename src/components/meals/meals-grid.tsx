import style from "@/components/styles/meals/meals-grid.module.css"
import MealItem from "./meal-item"

export default function MealsGrid({
    meals,
}: {
    meals: {
        id: number
        slug: string
        title: string
        image: string
        summary: string
        creator: string
        creator_email: string
    }[]
}) {

    return (
        <ul className={style.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem image={meal.image} creator={meal.creator} slug={meal.slug} summary={meal.summary} title={meal.title} />
                </li>
            ))}
        </ul>
    )
}
