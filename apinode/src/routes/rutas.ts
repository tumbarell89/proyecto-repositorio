import { Router, NextFunction } from "express";
import { tiposdenvio } from "../controllers/repartidor";

const rutas = Router();
rutas.get('/prueba', (req, res)=> res.send('el gato volador'));

rutas.get('/tiposdenvio', tiposdenvio);

export default rutas;