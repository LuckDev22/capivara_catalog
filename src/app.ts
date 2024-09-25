import cors from "cors";
import express from "express";
import "express-async-errors";
import conectMongoDB from "./db";
import { globalErrors } from "./errors";
import { capivaraRouter } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

conectMongoDB();
// ROTAS PÚBLICAS

// ROTAS PRIVADAS
app.use("/api", capivaraRouter);
// ERROS
app.use(globalErrors);

export default app;
