export const queries = {
    getAllEmpleados: "SELECT * FROM Empleado",
    createEmpleado: "INSERT INTO Empleado (fecha_ingreso, nombre, salario) VALUES (@fecha_ingreso, @nombre, @salario)",
    getEmpleadoById: "SELECT * FROM Empleado Where ID = @ID",
    deleteEmpleadoById: "DELETE FROM [empleados_konecta].[dbo].[Empleado] Where ID = @ID",
    updateEmpleadoById: "UPDATE Empleado SET fecha_ingreso = @fecha_ingreso, nombre = @nombre, salario = @salario WHERE ID = @ID",
}