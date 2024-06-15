import express from "express";
import config from "./config.js";

import empleadosRoutes from "./routes/empleados.routes.js";
import solicitudRoutes from "./routes/solicitud.routes.js";
import { login, authenticateJWT } from "./middleware/auth.js";

const app = express();

app.set("port", config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/login', login);

app.use(authenticateJWT);
app.use(empleadosRoutes);
app.use(solicitudRoutes);

export default app;