import mongoose from "mongoose";

// O Schema é responsavel determinar os dados que serão comunicados com o db, e por setar o arquivo expecifico
const projetoSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: [true, "O nome é obrigatório"] },
    linkRepositorio: { type: String, required: [true, "O repositorio é obrigatório"] },
    deploy: { type: String },
    numero: { type: Number, required: [true, "Falta o numero"] }
  }
);

// implementação do modelo ao arquivo expecifico (P.S se o arquivo não tiver sido criado ate o momente ele sera assim que a primeira conexão for feita)
const Projetos = mongoose.model("projeto", projetoSchema);


export default Projetos;