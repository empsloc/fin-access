import { db } from "@/utils"
import { FINANCE } from "@/utils/schema"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

export async function GET(req:any) {
    const response = await db.select().from(FINANCE)
    return NextResponse.json(response)
}

export async function DELETE(req:any) {
    const searchParams  =   req.nextUrl.searchParams
    const   id = searchParams.get('id')

    const result = await db.delete(FINANCE).where(eq(FINANCE.id,id))

    return NextResponse.json(result)
}

export async function POST(req:any,res:any) {
    const data = await req.json()

    const result = await db.insert(FINANCE).values({
        step:data?.step,
        customer:data?.customer,
        age:data?.age,
        gender:data?.gender,
        zipcodeOri:data?.zipcodeOri,
        merchant:data?.merchant,
        zipMerchant:data?.zipMerchant,
        category:data?.category,
        amount:data?.amount,
        fraud:data?.fraud,

    })

    return  NextResponse.json(result)
}