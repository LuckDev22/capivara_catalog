import mongoose, { Schema } from "mongoose";

const CapivaraSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  peso: {
    type: Number,
    required: true,
  },
  statusSaude: {
    type: String,
    required: true,
  },
  habitat: {
    type: String,
    required: true,
  },
  comportamento: {
    type: String,
    required: true,
  },
  dieta: {
    type: String,
    required: true,
  },
  observacoes: {
    type: String,
    required: false,
  },
});

const CapivaraModel =
  mongoose.models.Capivara || mongoose.model("Capivara", CapivaraSchema);

export default CapivaraModel;
