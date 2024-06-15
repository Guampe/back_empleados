import { connectionSql, sql, queries } from "../database/index.js";

export const getSolicitudes = async (req, res) => {
    try {
        const pool = await connectionSql();
        const result = await pool.request().query(queries.getAllSolicitudes);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createSolicitud = async (req, res) => {
    const { codigo, descripcion, resumen, id_empleado } = req.body;

    if (codigo == null || descripcion == null || resumen == null || id_empleado == null) {
        return res.status(400).json({ msg: "Bad Request - Solicitud Incompleta o Fallida" });
    }

    try {
        const pool = await connectionSql();
        await pool.request()
            .input("codigo", sql.VarChar, codigo)
            .input("descripcion", sql.VarChar, descripcion)
            .input("resumen", sql.VarChar, resumen)
            .input("id_empleado", sql.Int, id_empleado)
            .query(queries.createSolicitud);

        res.json({ codigo, descripcion, resumen, id_empleado });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getSolicitudById = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await connectionSql();
        const result = await pool.request()
            .input("id_solicitud", sql.Int, id)
            .query(queries.getSolicitudById);
        res.send(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deleteSolicitudById = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await connectionSql();
        await pool.request()
            .input("id_solicitud", sql.Int, id)
            .query(queries.deleteSolicitudById);
        res.send({ msg: "Solicitud eliminada" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
