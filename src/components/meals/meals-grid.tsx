import style from "@/components/styles/meals/meals-grid.module.css"
import MealItem from "./meal-item"

export default function MealsGrid({
    meals,
}: {
    meals: {
        id: number
        title: string
        slug: string
        image: string
        summary: string
        creator: string
    }[]
}) {
    return (
        <ul className={style.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    )
}
