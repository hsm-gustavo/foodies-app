import Link from "next/link"
import style from "@/components/styles/main-header/main-header.module.css"
import logoImg from "@/assets/logo.png"
import Image from "next/image"
import MainHeaderBackground from "./main-header-background"
import NavLink from "../nav-link/nav-link"

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
                            <NavLink href={"/meals"}>Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/community"}>
                                Foodies Community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
