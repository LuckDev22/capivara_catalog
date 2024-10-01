import { AppError } from "../../errors";
import { tCapivara, tCreateCapivara } from "../../interfaces";
import CapivaraModel from "../../models/capivara.model";

const createCapivaraService = async (
  data: tCreateCapivara
): Promise<tCapivara> => {
  try {
    const capivara = await CapivaraModel.create(data);

    return capivara;
  } catch (err: any) {
    console.log(err);
    if (err.code === 11000 && err.keyPattern && err.keyValue) {
      const duplicatedField = Object.keys(err.keyPattern)[0];
      const duplicatedValue = err.keyValue[duplicatedField];

      throw new AppError(
        `The ${duplicatedField}: "${duplicatedValue}" already exists.`
      );
    } else {
      throw new AppError("An error occurred while creating the Capybara.");
    }
  }
};

export default createCapivaraService;
