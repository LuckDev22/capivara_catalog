import { Router } from "express";
import { createCapivaraController } from "../controllers/capivaras";

const capivaraRouter = Router();

capivaraRouter.post("/capivaras", createCapivaraController);

export default capivaraRouter;
