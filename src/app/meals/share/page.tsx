"use client"

import classes from "@/app/meals/share/page.module.css"
import ImagePicker from "@/components/meals/image-picker"
import MealsFormSubmit from "@/components/meals/meals-form-submit"
import { shareMeal } from "@/services/actions"
import { useFormState } from "react-dom"
import { ZodIssue } from "zod"

function findErrors(path: string, errors: ZodIssue[]){
    return errors.filter((error) => error.path.includes(path)).map((error) => error.message)
}

export default function ShareMealPage() {
    const [state, formAction] = useFormState(shareMeal, { errors: [] })

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Share your{" "}
                    <span className={classes.highlight}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={formAction}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" name="name" required />
                        </p>
                        {findErrors("name", state.errors).map((error) => (
                            <p key={error}>{error}</p>
                        ))}
                        <p>
                            <label htmlFor="email">Your email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </p>
                        {findErrors("email", state.errors).map((error) => (
                            <p key={error}>{error}</p>
                        ))}
                    </div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required />
                    </p>
                    {findErrors("title", state.errors).map((error) => (
                        <p key={error}>{error}</p>
                    ))}
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input
                            type="text"
                            id="summary"
                            name="summary"
                            required
                        />
                    </p>
                    {findErrors("summary", state.errors).map((error) => (
                        <p key={error}>{error}</p>
                    ))}
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows={10}
                            required
                        ></textarea>
                    </p>
                    {findErrors("instructions", state.errors).map((error) => (
                        <p key={error}>{error}</p>
                    ))}
                    <ImagePicker label="Your image" name="image" />
                    {findErrors("image", state.errors).map((error) => (
                        <p key={error}>{error}</p>
                    ))}
                    <p className={classes.actions}>
                        <MealsFormSubmit />
                    </p>
                </form>
            </main>
        </>
    )
}
