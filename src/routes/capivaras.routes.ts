import { Router } from "express";
import { createCapivaraController } from "../controllers/capivaras";
import getCapivaraController from "../controllers/capivaras/getCapivara.controller";

const capivaraRouter = Router();

capivaraRouter.post("/capivaras", createCapivaraController);
capivaraRouter.get("/capivaras", getCapivaraController);

export default capivaraRouter;
