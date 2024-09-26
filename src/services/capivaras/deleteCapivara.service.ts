import { AppError } from "../../errors";
import { CapivaraModel } from "../../models";

const deleteCapivaraService = async (id: string) => {
  try {
    const product = await CapivaraModel.findByIdAndDelete(id);

    if (!product) {
      throw new AppError("Capybara not found.", 404);
    }
  } catch (err: any) {
    console.log(err);
    if (err instanceof AppError) {
      throw err;
    } else {
      throw new AppError("An error occurred while deleting the Capybara.");
    }
  }
};

export default deleteCapivaraService;
