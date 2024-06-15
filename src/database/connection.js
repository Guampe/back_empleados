import sql from "mssql"
import config from "../config.js"

const dbSet = {
    user: config.dbUsuario,
    password: config.usuarioPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
}

export async function connectionSql () {
    try {
        const pool = await sql.connect(dbSet)
        return pool
    } catch (error) {
        console.log(error)
    }
}

export { sql }