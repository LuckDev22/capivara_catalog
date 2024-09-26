import { Request, Response } from "express";
import { createCapivaraService } from "../../services/capivaras";

const createCapivaraController = async (req: Request, res: Response) => {
  const data = await createCapivaraService(req.body);

  return res.status(201).json(data);
};

export default createCapivaraController;
