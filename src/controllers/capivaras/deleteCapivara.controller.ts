import { Request, Response } from "express";
import { deleteCapivaraService } from "../../services/capivaras";

const deleteCapivaraController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteCapivaraService(id);
  return res.status(204).send();
};

export default deleteCapivaraController;
