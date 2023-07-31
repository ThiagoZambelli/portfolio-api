import { Certificados } from "../models/index.js";

class CertificadoController {
  static listaCertificados = async (req, res, next) => {
    try{
      const resultado = await Certificados.find();
      res.status(200).json(resultado);
    }
    catch(err){
      next(err);
    }
  };
}

export default CertificadoController;