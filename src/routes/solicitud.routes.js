import { Router } from "express";
import { getSolicitudes, createSolicitud, getSolicitudById, deleteSolicitudById } from "../controllers/solicitud.controllers.js";

const router = Router();

router.get("/solicitudes", getSolicitudes);
router.post("/solicitudes", createSolicitud);
router.get("/solicitudes/:id", getSolicitudById);
router.delete("/solicitudes/:id", deleteSolicitudById);

export default router;
