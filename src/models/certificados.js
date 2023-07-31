import mongoose from "mongoose";

const certificadoSchema = new mongoose.Schema(
  {
    _id: { type: String },
    nome: { type: String, required: [true, "Nome é necessario"] },
    escola: { type: String, required: [true, "Escola é necessario"] },
    horas: { type: Number, min: [1, "Deve ter mais do que 1h"], required: [true, "Quantidade de Horas é necessario"]}
  }

);

const Certificados = mongoose.model("certificado", certificadoSchema);

export default Certificados;