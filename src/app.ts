import cors from "cors";
import express from "express";
import "express-async-errors";
import conectMongoDB from "./db";
import { globalErrors } from "./errors";
import { capivaraRouter } from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

const app = express();

const Origins = ["http://localhost:8888", "http://localhost:3000", ""];

app.use(
  cors({
    origin: Origins,
  })
);

app.use(express.json());

conectMongoDB();

//PUBLICAS
app.use("/api", capivaraRouter);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// ERROS
app.use(globalErrors);

export default app;
