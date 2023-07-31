import express from "express";
import TecnologiasRoutes from "./TecnologiasRoutes.js";
import ProjetosRoutes from "./ProjetosRoutes.js";
import CertificadoRoutes from "./CertificadosRoutes.js";
import FormacaoRoutes from "./FormacoesRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Conectado com Banco");
  }),
  app.use(
    express.json(),
    TecnologiasRoutes,
    ProjetosRoutes,
    CertificadoRoutes,
    FormacaoRoutes
  );
};

export default routes;