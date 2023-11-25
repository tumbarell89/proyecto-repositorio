import { Router, NextFunction } from "express";
import { addrepartidor, repartidores, tiposdenvio } from "../controllers/repartidor";
import { addproveedores, proveedores } from "../controllers/proveedores";
import { addpaquete, paquetes } from "../controllers/paquete";
import { addenvio, envios } from "../controllers/envio";
import { vRegistrarEnvio, vRegistrarPaquete, vRegistrarPersona, vTokenAcceso } from "../lib/validaciones";

const rutas = Router();
//middlewares para las rutas
rutas.use(vTokenAcceso);

rutas.get('/prueba', (req, res, next)=> res.send('el gato volador'));

rutas.get('/tiposdenvio', tiposdenvio);


rutas.get('/repartidores', repartidores);

rutas.post('/repartidores',vRegistrarPersona, addrepartidor);

rutas.get('/proveedores', proveedores);

rutas.post('/proveedores',vRegistrarPersona, addproveedores);

rutas.get('/paquete', paquetes);

rutas.post('/paquete', vRegistrarPaquete, addpaquete);

rutas.get('/envio', envios);

rutas.post('/envio', vRegistrarEnvio, addenvio);

export default rutas;