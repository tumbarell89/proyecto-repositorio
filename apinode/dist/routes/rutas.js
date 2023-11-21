"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const repartidor_1 = require("../controllers/repartidor");
const rutas = (0, express_1.Router)();
rutas.get('/prueba', (req, res) => res.send('el gato volador'));
rutas.get('/tiposdenvio', repartidor_1.tiposdenvio);
exports.default = rutas;
