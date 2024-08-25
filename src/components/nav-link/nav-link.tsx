"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import style from "@/components/styles/nav-link/nav-link.module.css"

export default function NavLink({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) {
    const path = usePathname()

    return (
        <Link
            href={href}
            className={
                path.startsWith(href)
                    ? `${style.link} ${style.active}`
                    : style.link
            }
        >
            {children}
        </Link>
    )
}
