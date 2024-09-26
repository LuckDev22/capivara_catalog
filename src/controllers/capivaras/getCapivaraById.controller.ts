import { Request, Response } from "express";
import { getCapivaraByIdService } from "../../services/capivaras";

const getCapivaraByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await getCapivaraByIdService(id);

  return res.status(200).json(data);
};

export default getCapivaraByIdController;
