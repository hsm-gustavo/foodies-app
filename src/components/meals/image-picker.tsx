"use client"

import style from "@/components/styles/meals/image-picker.module.css"
import Image from "next/image"
import React, { useRef, useState } from "react"

export default function ImagePicker({
    label,
    name,
}: {
    label: string
    name: string
}) {

    const [pickedImage, setPickedImage] = useState<string | null>(null)
    const imageInputRef = useRef<HTMLInputElement>(null)

    function handlePickImage() {
        if (imageInputRef.current) imageInputRef.current.click()
    }

    function handleImagePreview(event: React.ChangeEvent<HTMLInputElement>){
        const file = event.target.files ? event.target.files[0] : null

        if (!file) {
            setPickedImage(null)
            return
        }

        const reader = new FileReader()
        
        reader.onload = () => {
            setPickedImage(reader.result as string)
        }
        
        reader.readAsDataURL(file)
    }

    return (
        <div className={style.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={style.controls}>
                <div className={style.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && <Image src={pickedImage} alt="Image selected by the user" fill />}
                </div>
                <input
                    className={style.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInputRef}
                    onChange={handleImagePreview}
                    required
                />
                <button className={style.button} type="button" onClick={handlePickImage}>
                    Pick an Image
                </button>
            </div>
        </div>
    )
}
