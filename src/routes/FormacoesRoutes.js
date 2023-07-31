import express from "express";
import FormacaoController  from "../controllers/FormacoesController.js";

const router = express.Router();

router
  .get("/formacao", FormacaoController.pegaFormacoes);

export default router;