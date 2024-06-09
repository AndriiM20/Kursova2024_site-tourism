import connection from '../mysql/connection'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request:NextRequest) {

    const data = await request.json();
    const name = data.formData.name;
    const lastname = data.formData.lastname;
    const email = data.formData.email;
    const phone = data.formData.phone;
    const tour = data.formData.tour;
    const numh = data.formData.numh;
    const date = data.formData.date;
    console.log("data : ", data)
    try{
        const connectSQL = await connection()
        const [input, fields] = await connectSQL.execute(
            `
            INSERT INTO client (Name, Last_Name, Phone, Email, DateF) 
            VALUES ('${name}', '${lastname}', '${phone}', '${email}','${date}');
            `
        );
        const [lastClientId] = await connectSQL.execute(
            `
            SET @client_id = LAST_INSERT_ID();
            `
        );
        const [forms] = await connectSQL.execute(
            `
            SET @tour_id = '${tour}';
            `
        );
        const [results] = await connectSQL.execute(
            `
            INSERT INTO forms (idTour, idClient, NumH) 
            VALUES (@tour_id, @client_id, '${numh}');
            `
        );
        return NextResponse.json({
            input 
            ,lastClientId 
            ,forms
            ,results
            
        })
    } catch (error){
        console.log("Query error: ", error)
    }
    
}