import mongoose from "mongoose";
import { AppError } from "../errors";

const conectMongoDB = async () => {
  const { DB_CONEXAO_STRING } = process.env;

  if (!DB_CONEXAO_STRING) {
    throw new AppError("Database configuration ENV not provided", 500);
  }

  mongoose.connection.on("connected", () => console.log("Database connected"));

  mongoose.connection.on("error", (error) =>
    console.error(
      `An error occurred while connecting to the database: ${error}`
    )
  );

  await mongoose.connect(DB_CONEXAO_STRING);
};

export default conectMongoDB;
