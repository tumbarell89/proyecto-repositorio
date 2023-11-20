"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductos = exports.getProductos = void 0;
const database_1 = require("../database");
const getProductos = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listaproductos = yield database_1.con.query('SELECT id_producto, \"CODIGO\", \"DESCRIPCION\", \"UM\", \"CANT\", \"PRECIOEUR\", \"VALOREUR\" FROM public.producto');
        return resp.status(200).json(listaproductos.rows);
    }
    catch (error) {
        console.log(error);
        return resp.send('error' + error);
    }
});
exports.getProductos = getProductos;
const addProductos = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cod, descripcion, um, cant, precio, valor } = req.body;
        const listaproductos = yield database_1.con.query('INSERT INTO public.producto( \"CODIGO\" ,  \"DESCRIPCION\" , \"UM\" ,  \"CANT\" ,  \"PRECIOEUR\" ,  \"VALOREUR\")' +
            'VALUES ($1, $2, $3, $4, $5, $6)', [cod, descripcion, um, cant, precio, valor]);
        console.log(listaproductos);
        return resp.json({ message: 'producto adicionado' });
    }
    catch (error) {
        console.log(error);
        return resp.status(500).send('error' + error);
    }
});
exports.addProductos = addProductos;
