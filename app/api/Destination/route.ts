import connection from '../mysql/connection'
import { NextResponse } from 'next/server'


export async function GET() {
    try{
        const connectSQL = await connection()
        const [results, fields] = await connectSQL.execute(
            'SELECT * FROM tourr'
        )
        return NextResponse.json({
            results
        })
    } catch (error){
        console.log("Query error: ", error)
    }
}