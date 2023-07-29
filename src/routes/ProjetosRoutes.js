import express from "express";
import ProjetoController from "../controllers/ProjetosController.js";

const router = express.Router();

router
  .get("/projeto", ProjetoController.listarProjetos)
  .post("/projeto", ProjetoController.cadastrarListaDeProjetos);
  

export default router;