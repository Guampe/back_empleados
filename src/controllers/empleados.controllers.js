import { connectionSql, sql, queries } from "../database/index.js"

export const getEmpleados = async (req, res) => {
    try {
        const pool = await connectionSql()
        const result = await pool.request().query(queries.getAllEmpleados)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


export const createNewEmpleado = async (req, res) => {

    const { fecha_ingreso, nombre, salario } = req.body

    if (fecha_ingreso == null || nombre == null || salario == null) {
        return res.status(400).json({ msg: "Bad Request - Solicitud Incompleta o Fallida" })
    }

    try {
        const pool = await connectionSql()
        await pool.request()
            .input("fecha_ingreso", sql.Date, fecha_ingreso)
            .input("nombre", sql.VarChar, nombre)
            .input("salario", sql.Int, salario)
            .query(queries.createEmpleado)

        res.json({ fecha_ingreso, nombre, salario })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


export const getEmpleadoById = async (req, res) => {
    try {
        const {id} = req.params
        const pool = await connectionSql()
        const result = await pool.request()
        .input("ID", id )
        .query(queries.getEmpleadoById)
        res.send(result.recordset[0])        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const deleteEmpleadoById = async (req, res) => {
    try {
        const {id} = req.params
        const pool = await connectionSql()
        const result = await pool.request()
        .input("ID", id )
        .query(queries.deleteEmpleadoById)
        res.send(result)        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


export const updateEmpleadoById = async (req, res) => {

    const { fecha_ingreso, nombre, salario } = req.body
    const {id} = req.params

    if (fecha_ingreso == null || nombre == null || salario == null) {
        return res.status(400).json({ msg: "Bad Request - Solicitud Incompleta o Fallida" })
    }

    try {
        const pool = await connectionSql()
        await pool.request()
        .input("fecha_ingreso", sql.Date, fecha_ingreso)
        .input("nombre", sql.VarChar, nombre)
        .input("salario", sql.Int, salario)
        .input("ID", sql.Int, id)
        .query(queries.updateEmpleadoById)
        res.json({fecha_ingreso, nombre, salario})        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}