export const queries = {
    getAllEmpleados: "SELECT * FROM Empleado",
    createEmpleado: "INSERT INTO Empleado (fecha_ingreso, nombre, salario) VALUES (@fecha_ingreso, @nombre, @salario)",
    getEmpleadoById: "SELECT * FROM Empleado Where ID = @ID",
    deleteEmpleadoById: "DELETE FROM Empleado Where ID = @ID",
    updateEmpleadoById: "UPDATE Empleado SET fecha_ingreso = @fecha_ingreso, nombre = @nombre, salario = @salario WHERE ID = @ID",
    
    // Solicitudes
    getAllSolicitudes: "SELECT s.id_solicitud, s.codigo, s.descripcion, s.resumen, e.nombre AS empleado_nombre FROM Solicitud s INNER JOIN Empleado e ON s.id_empleado = e.ID",
    createSolicitud: "INSERT INTO Solicitud (codigo, descripcion, resumen, id_empleado) VALUES (@codigo, @descripcion, @resumen, @id_empleado)",
    getSolicitudById: "SELECT s.id_solicitud, s.codigo, s.descripcion, s.resumen, e.nombre AS empleado_nombre FROM Solicitud s INNER JOIN Empleado e ON s.id_empleado = e.ID WHERE s.id_solicitud = @id_solicitud",
    deleteSolicitudById: "DELETE FROM Solicitud WHERE id_solicitud = @id_solicitud"
};
