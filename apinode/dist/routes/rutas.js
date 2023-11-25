"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const repartidor_1 = require("../controllers/repartidor");
const proveedores_1 = require("../controllers/proveedores");
const paquete_1 = require("../controllers/paquete");
const envio_1 = require("../controllers/envio");
const validaciones_1 = require("../lib/validaciones");
const rutas = (0, express_1.Router)();
//middlewares para las rutas
rutas.use(validaciones_1.vTokenAcceso);
rutas.get('/prueba', (req, res, next) => res.send('el gato volador'));
rutas.get('/tiposdenvio', repartidor_1.tiposdenvio);
rutas.get('/repartidores', repartidor_1.repartidores);
rutas.post('/repartidores', validaciones_1.vRegistrarPersona, repartidor_1.addrepartidor);
rutas.get('/proveedores', proveedores_1.proveedores);
rutas.post('/proveedores', validaciones_1.vRegistrarPersona, proveedores_1.addproveedores);
rutas.get('/paquete', paquete_1.paquetes);
rutas.post('/paquete', validaciones_1.vRegistrarPaquete, paquete_1.addpaquete);
rutas.get('/envio', envio_1.envios);
rutas.post('/envio', validaciones_1.vRegistrarEnvio, envio_1.addenvio);
exports.default = rutas;
