import { AppError } from "../../errors";
import CapivaraModel from "../../models/capivara.model";

const getCapivaraService = async (): Promise<any> => {
  try {
    const capivara = await CapivaraModel.find();

    return capivara;
  } catch (err: any) {
    console.log(err);
    throw new AppError("An error occurred while listing the capivara.");
  }
};

export default getCapivaraService;
