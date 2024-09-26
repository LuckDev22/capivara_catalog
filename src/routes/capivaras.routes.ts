import { Router } from "express";
import {
  createCapivaraController,
  deleteCapivaraController,
  getCapivaraByIdController,
  getCapivaraController,
} from "../controllers/capivaras";

const capivaraRouter = Router();

capivaraRouter.post("/capivaras", createCapivaraController);
capivaraRouter.get("/capivaras", getCapivaraController);
capivaraRouter.get("/capivaras/:id", getCapivaraByIdController);
capivaraRouter.delete("/capivaras/:id", deleteCapivaraController);
capivaraRouter.put("/capivaras/:id", getCapivaraByIdController);

export default capivaraRouter;
