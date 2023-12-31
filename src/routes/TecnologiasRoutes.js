import express from "express";
import TecnologiaController from "../controllers/TecnologiaController.js";

const router = express.Router();

router
  .get("/tecnologia", TecnologiaController.listarTecnologias)
  .get("/tecnologia/:id",TecnologiaController.pegarTecnologias)
  .post("/tecnologia", TecnologiaController.cadastrarTecnologia);
  

export default router;