import type { Metadata } from "next"
import { Montserrat, Quicksand } from "next/font/google"
import "./globals.css"
import MainHeader from "@/components/main-header/main-header"

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-quicksand",
})

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    variable: "--font-montserrat",
})

export const metadata: Metadata = {
    title: "NextLevel Food",
    description: "Delicious meals, shared by a food-loving community.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className={`${quicksand.variable} ${montserrat.variable}`}
        >
            <body>
                <MainHeader />
                {children}
            </body>
        </html>
    )
}
