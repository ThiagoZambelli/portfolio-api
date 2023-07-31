import express from "express";
import CertificadoController from "../controllers/CertificadosController.js";

const router = express.Router();

router
  .get("/certificado", CertificadoController.listaCertificados);

export default router;