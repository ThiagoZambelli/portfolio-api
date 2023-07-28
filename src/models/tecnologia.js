import mongoose from "mongoose";

// O Schema é responsavel determinar os dados que serão comunicados com o db, e por setar o arquivo expecifico
const tecnologiaSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: [true, "O nome é obrigatório"] },
    titulo: { type: String, required: [true, "o titulo é obrigatório"] },
    descricao: { type: String, required: [true, "A descrição é obrigatório"] },
    corBase: { type: String, required: [true, "a corBase é obrigatório"] },
    imagem: { type: String, required: [true, "A imagem é obrigatório"] },
    
  }
);

// implementação do modelo ao arquivo expecifico (P.S se o arquivo não tiver sido criado ate o momente ele sera assim que a primeira conexão for feita)
const Tecnologia = mongoose.model("tecnologia", tecnologiaSchema);


export default Tecnologia;