import { z } from "zod";
import {
  capivaraArraySchema,
  capivaraCreateSchema,
  capivaraSchema,
  capivaraUpdateSchema,
} from "../schemas";

type tCapivara = z.infer<typeof capivaraSchema>;
type tCreateCapivara = z.infer<typeof capivaraCreateSchema>;
type tUpdateCapivara = z.infer<typeof capivaraUpdateSchema>;
type tCapivaraArray = z.infer<typeof capivaraArraySchema>;

export { tCapivara, tCreateCapivara, tUpdateCapivara, tCapivaraArray };
