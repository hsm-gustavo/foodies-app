import Link from "next/link"
import style from "@/components/styles/main-header/main-header.module.css"
import logoImg from "@/assets/logo.png"
import Image from "next/image"
import MainHeaderBackground from "./main-header-background"

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={style.header}>
                <Link href="/" className={style.logo}>
                    <Image
                        src={logoImg}
                        alt="A plate with food on it"
                        priority
                    />
                    NextLevel Food
                </Link>
                <nav className={style.nav}>
                    <ul>
                        <li>
                            <Link href={"/meals"} className="">
                                Browse Meals
                            </Link>
                        </li>
                        <li>
                            <Link href={"/community"}>Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
