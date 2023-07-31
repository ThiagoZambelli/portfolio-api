import { Formacoes } from "../models/index.js";

class FormacaoController {
  static pegaFormacoes = async (req, res, next) => {
    try{
      const resultado = await Formacoes.find();
      res.status(200).json(resultado);
    }
    catch(err){
      next(err);
    }
  };
}

export default FormacaoController;