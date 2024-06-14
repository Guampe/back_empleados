import sql from "mssql"

const dbSet = {
    user: "usuarioKonecta",
    password: "Konecta123",
    server: "localhost",
    database: "empleados_konecta",
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
}

async function connectionSql () {
    try {
        const pool = await sql.connect(dbSet)
        return pool
    } catch (error) {
        console.log(error)
    }

}

connectionSql()
