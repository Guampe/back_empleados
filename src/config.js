import { config } from "dotenv"
config()

export default {
    port: process.env.PORT || 3000,
    dbUsuario: process.env.DB_USER || "",
    usuarioPassword: process.env.DB_PASSWORD || "",
    dbServer: process.env.DB_SERVER || "",
    dbDatabase: process.env.DB_DATABASE || "",
}