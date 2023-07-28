import express from "express";
import TecnologiasRoutes from "./TecnologiasRoutes.js";
import ProjetoController from "./ProjetosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Conectado com Banco");
  }),
  app.use(
    express.json(),
    TecnologiasRoutes,
    ProjetoController   
  );
};

export default routes;