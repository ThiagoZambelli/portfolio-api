import mongoose from "mongoose";

const formacaoSchema = new mongoose.Schema(
  {
    _id:{type:String},
    nome:{type:String, required:[true, "Nome é obrigatorio"]},
    escola:{type:String, required:[true, "Local de formação é necessario"]},
    tipo:{type: String, required:[true, "Tipo de formação, necessario"]}
  }
);

const Formacoes = mongoose.model("formacao", formacaoSchema);

export default Formacoes;