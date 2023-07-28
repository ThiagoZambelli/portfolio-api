import express from "express";
import TecnologiaController from "../controllers/TecnologiaController.js";

const router = express.Router();

router
  .get("/tecnologia", TecnologiaController.listarTecnologias);
  

export default router;