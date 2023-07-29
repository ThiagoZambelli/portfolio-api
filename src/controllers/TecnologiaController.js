// O controller e responsavel por criar os metodos executados

// importação do model, responsavel pela criação do modelo e da coneção com o arquivo não relacional expecifico
import { Tecnologia } from "../models/index.js";

// cada um dos metodos da classe serão chamados em um dos verbos http
class TecnologiaController {
  static listarTecnologias = async (req, res, next) => {
    try {
      const resultado = await Tecnologia.find()
        .sort({nome: 1});
      res.status(200).json(resultado);
    } catch (err) {
      next(err);
    }
  };
  static cadastrarTecnologia = async (req, res, next) => {
    const tecnologia = new Tecnologia(req.body);
    try{
      await tecnologia.save();
      res.status(201).send({menssage:"Cadastro realizado com sucesso!"});
    }
    catch(err){
      next(err);
    }
  };

}

export default TecnologiaController;