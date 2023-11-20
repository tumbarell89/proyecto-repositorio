import { Router, NextFunction } from "express";

const rutas = Router();
rutas.get('/prueba', (req, res)=> res.send('el gato volador'));

export default rutas;