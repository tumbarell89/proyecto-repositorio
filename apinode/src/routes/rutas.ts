import { Router, NextFunction } from "express";
import { addrepartidor, repartidores, tiposdenvio } from "../controllers/repartidor.controllers";
import { addproveedores, proveedores } from "../controllers/proveedores.controllers";
import { addpaquete, estadopaquete, listarpaquetesbyidenvio, paquetes } from "../controllers/paquete.controllers";
import { addenvio, envios } from "../controllers/envio.controllers";
import { vEstadoPaquete, vPorEnvio, vRegistrarEnvio, vRegistrarPaquete, vRegistrarProveedor, vRegistrarRepartidor, vTokenAcceso } from "../lib/validaciones";

const rutas = Router();
//middlewares para las rutas
rutas.use(vTokenAcceso);

rutas.get('/prueba', (req, res, next)=> res.send('el gato volador'));

rutas.get('/tiposdenvio', tiposdenvio);


rutas.get('/repartidores', repartidores);

rutas.post('/repartidores',vRegistrarRepartidor, addrepartidor);

rutas.get('/proveedores', proveedores);

rutas.post('/proveedores',vRegistrarProveedor, addproveedores);

rutas.get('/paquete', paquetes);

rutas.get('/estadopaquete/:idpaquete', vEstadoPaquete, estadopaquete);

rutas.get('/listarpaquetesbyidenvio/:idenvio', vPorEnvio, listarpaquetesbyidenvio);

rutas.post('/paquete', vRegistrarPaquete, addpaquete);

rutas.get('/envio', envios);

rutas.post('/envio', vRegistrarEnvio, addenvio);

export default rutas;