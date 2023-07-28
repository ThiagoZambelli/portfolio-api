import express from "express";
import ProjetoController from "../controllers/ProjetosController.js";

const router = express.Router();

router
  .get("/projeto", ProjetoController.listarProjetos);
  

export default router;