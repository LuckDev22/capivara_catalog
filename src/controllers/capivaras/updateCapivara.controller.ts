import { Request, Response } from "express";
import { updateCapivaraService } from "../../services/capivaras";

const updateCapivaraController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const capivaraData = await updateCapivaraService(id, req.body);

  return res.status(200).json(capivaraData);
};

export default updateCapivaraController;
