import { AppError } from "../../errors";
import { tUpdateCapivara } from "../../interfaces/capivara.interface";
import CapivaraModel from "./../../models/capivara.model";

const updateCapivaraService = async (id: string, data: tUpdateCapivara) => {
  try {
    const capivaraUpdate = await CapivaraModel.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!capivaraUpdate) {
      throw new AppError("Capybara not found.");
    }

    return capivaraUpdate;
  } catch (err: any) {
    if (err instanceof AppError) {
      throw err;
    } else if (err.code === 11000 && err.keyPattern && err.keyValue) {
      const duplicatedField = Object.keys(err.keyPattern)[0];
      const duplicatedValue = err.keyValue[duplicatedField];

      throw new AppError(
        `The ${duplicatedField}: "${duplicatedValue}" already exists.`
      );
    } else {
      console.log(err);
      throw new AppError("An error occurred while updating this Capybara.");
    }
  }
};

export default updateCapivaraService;
