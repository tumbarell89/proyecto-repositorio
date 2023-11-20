"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rutas = (0, express_1.Router)();
rutas.get('/prueba', (req, res) => res.send('el gato volador'));
exports.default = rutas;
