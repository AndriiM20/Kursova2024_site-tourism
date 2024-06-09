import mysql from 'mysql2/promise'

export default function connection(){
    try{
        const connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'tour'
        })
        return connection
    } catch (error){
        console.log("Connection: ", error)
        throw error
    }
}