// O controller e responsavel por criar os metodos executados
// import lista from "../../projetos.json" assert { type: 'json' };
// importação do model, responsavel pela criação do modelo e da coneção com o arquivo não relacional expecifico
import { Projeto } from "../models/index.js";

// cada um dos metodos da classe serão chamados em um dos verbos http
class ProjetoController {
  static listarProjetos = async (req, res, next) => {
    try {
      const resultado = await Projeto.find()
        .sort({ nome: 1 });
      res.status(200).json(resultado);
    } catch (err) {
      next(err);
    }
  };
  static cadastrarProjeto = async (req, res, next) => {
    const projeto = new Projeto(req.body);
    try {
      await projeto.save();
      res.status(201).send({ message: "Projeto cadastrado com sucesso!" });
    }
    catch (err) {
      next(err);
    }
  };
  // static cadastrarListaDeProjetos = async (req, res, next) => {

  //   try{
  //     lista.map(e => {
  //       const projeto = new Projeto(e);
  //       if(projeto.deploy !== ""){
  //         projeto.save();
  //       }
  //     });
  //   }
  //   catch(err){
  //     next(err);
  //   }
  // };

}

export default ProjetoController;