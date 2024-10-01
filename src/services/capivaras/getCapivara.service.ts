import { AppError } from "../../errors";
import { tCapivaraArray } from "../../interfaces";
import CapivaraModel from "../../models/capivara.model";

const getCapivaraService = async (): Promise<tCapivaraArray> => {
  try {
    const capivara = await CapivaraModel.find();

    return capivara;
  } catch (err: any) {
    console.log(err);
    throw new AppError("An error occurred while listing the Capybara.");
  }
};

export default getCapivaraService;
