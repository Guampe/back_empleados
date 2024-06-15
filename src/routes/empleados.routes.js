import { Router } from "express"
import { getEmpleados, createNewEmpleado, getEmpleadoById, deleteEmpleadoById, updateEmpleadoById } from "../controllers/empleados.controllers.js"

const router = Router()

router.get("/empleados", getEmpleados)

router.get("/empleados/:id", getEmpleadoById)

router.post("/empleados", createNewEmpleado )

router.delete("/empleados/:id", deleteEmpleadoById)

router.put("/empleados/:id", updateEmpleadoById)

export default router