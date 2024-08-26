import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, {params}: {params: {slug: string}}) {
    const slug = params.slug
    const meal = await prisma.meal.findUnique({
        where: {slug},
    })

    return NextResponse.json(meal)
}