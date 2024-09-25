import { z } from "zod";

const capivaraSchema = z.object({
  _id: z.string(),
  nome: z.string({
    required_error: "O nome é obrigatório.",
  }),
  idade: z
    .number({
      required_error: "A idade é obrigatória.",
    })
    .positive("A idade deve ser um número positivo."),
  peso: z
    .number({
      required_error: "O peso é obrigatório.",
    })
    .positive("O peso deve ser um número positivo."),
  statusSaude: z.enum(
    [
      "Saudável",
      "Necessita de cuidados",
      "Doente",
      "Em recuperação",
      "Ferido",
      "Em observação",
      "Grávida",
      "Recém-nascido",
    ],
    {
      required_error: "O status de saúde é obrigatório.",
    }
  ),
  habitat: z.string({
    required_error: "O habitat é obrigatório.",
  }),
  comportamento: z.string({
    required_error: "O comportamento é obrigatório.",
  }),
  dieta: z.string({
    required_error: "A dieta é obrigatória.",
  }),
  observacoes: z.string().optional().default("Nenhuma observação"),
  __v: z.string(),
});

const capivaraCreateSchema = capivaraSchema.omit({
  _id: true,
  __v: true,
});

const capivaraUpdateSchema = capivaraCreateSchema.partial();

const capivaraArraySchema = capivaraSchema.array();

export {
  capivaraSchema,
  capivaraCreateSchema,
  capivaraUpdateSchema,
  capivaraArraySchema,
};
