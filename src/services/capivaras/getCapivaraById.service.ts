import { AppError } from "../../errors";
import { CapivaraModel } from "../../models";

const getCapivaraByIdService = async (id: string) => {
  try {
    const product = await CapivaraModel.findById(id);

    if (!product) {
      throw new AppError("Capybara not found.", 404);
    }

    return product;
  } catch (err: any) {
    console.log(err);

    if (err instanceof AppError) {
      throw err;
    } else {
      throw new AppError("An error occurred while listing the Capybara.");
    }
  }
};

export default getCapivaraByIdService;
