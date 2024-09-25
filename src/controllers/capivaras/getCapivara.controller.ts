import { Request, Response } from "express";
import getCapivaraService from "../../services/capivaras/getCapivara.service";

const getCapivaraController = async (_: Request, res: Response) => {
  const data = await getCapivaraService();

  return res.status(200).json(data);
};

export default getCapivaraController;
