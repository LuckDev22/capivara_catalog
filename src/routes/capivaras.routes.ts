import { Router } from "express";
import {
  createCapivaraController,
  deleteCapivaraController,
  getCapivaraByIdController,
  getCapivaraController,
  updateCapivaraController,
} from "../controllers/capivaras";

const capivaraRouter = Router();

capivaraRouter.post("/capivaras", createCapivaraController);
capivaraRouter.get("/capivaras", getCapivaraController);
capivaraRouter.get("/capivaras/:id", getCapivaraByIdController);
capivaraRouter.put("/capivaras/:id", updateCapivaraController);
capivaraRouter.delete("/capivaras/:id", deleteCapivaraController);

export default capivaraRouter;
