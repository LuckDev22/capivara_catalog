import cors from "cors";
import express from "express";
import "express-async-errors";
import conectMongoDB from "./db";
import { globalErrors } from "./errors";

const app = express();

app.use(cors());

conectMongoDB();

// ERROS
app.use(globalErrors);

export default app;
