import { connectDB } from '@/utils/db'
import Incidence from '@/models/Incidence'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {

    try {
        const { searchParams } = new URL(req.url)
        const email = searchParams.get('email')
        await connectDB()
        
        let incidencias
        if (email) {
            incidencias = await Incidence.find({ email })
        } else {
            incidencias = await Incidence.find()
        }

        return NextResponse.json(incidencias)

    } catch (error: any) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}

export async function POST(req: Request) {

    try {
        await connectDB()
        const body = await req.json();
        const incidencia = new Incidence(body)
        const savedIncidence = await incidencia.save()

        return NextResponse.json(savedIncidence)

    } catch (error: any) {

        console.log(error.message)
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}

export async function DELETE(req: Request) {

    try {
        await connectDB()
        await Incidence.deleteMany()
        return new NextResponse()

    } catch (error: any) {

        console.log(error.message)
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}