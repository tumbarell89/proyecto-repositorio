"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_controller_1 = require("../controllers/productos.controller");
const apiuser_controller_1 = require("../controllers/apiuser.controller");
const rutas = (0, express_1.Router)();
rutas.get('/prueba', (req, res) => res.send('el gato volador'));
/**
 * @swagger
 * components:
 *  schemas:
 *      userapi:
 *          type: object
 *          properties:
 *              idusuario:
 *                  type: integer
 *              userapi:
 *                  type: string
 *                  description: codigo del producto
 *              contrasenna:
 *                  type: string
 *                  description: contraseña de conexion de user api
 *              bdconnection:
 *                  type: string
 *                  description: bd de conexion del user api
 *              userbd:
 *                  type: string
 *                  description: user de conexion bd de user api
 *              contrasennabd:
 *                  type: string
 *                  description: contraseña de conexion  de bd de user api
 *          required:
 *              - userapi
 *              - contrasenna
 *          example:
 *              userapi: pedro
 *              contrasenna: fsdsfs
 *              bdconnection: 127.0.0.1
 *              userbd: postgres
 *              contrasennabd: postgres
 */
/**
 * @swagger
 * components:
 *  schemas:
 *      productos:
 *          type: object
 *          properties:
 *              id_producto:
 *                  type: integer
 *              CODIGO:
 *                  type: string
 *                  description: codigo del producto
 *              DESCRIPCION:
 *                  type: string
 *                  description: descripcion del producto
 *              UM:
 *                  type: string
 *                  description: unidad del mediad del producto
 *              CANT:
 *                  type: number
 *                  description: cantidad del producto
 *              PRECIOEUR:
 *                  type: number
 *                  description: precio del producto en euro
 *              VALOREUR:
 *                  type: number
 *                  description: valor del producto en euro
 *          required:
 *              - CODIGO
 *              - DESCRIPCION
 *              - UM
 *              - CANT
 *              - PRECIOEUR
 *              - VALOREUR
 *          example:
 *              id_producto: 121213
 *              CODIGO: 23frr
 *              DESCRIPCION: sabana azul
 *              UM: UNO
 *              CANT: 2
 *              PRECIOEUR: 3
 *              VALOREUR: 4
 */
/**
 * @swagger
 * tags:
 *  name: User Api
 *  description: Grupo de peticiones de loggin a la api
 */
/**
 * @swagger
 * tags:
 *  name: Get Productos
 *  description: Grupo de peticiones get
 */
/**
 * @swagger
 * tags:
 *  name: Post Productos
 *  description: Grupo de peticiones post
 */
/**
 * @swagger
 * /actualizarusuario:
 *  put:
 *      summary: Actualizar fecha de vencimiento y token de un usuario
 *      tags: [User Api]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: Object
 *                      properties:
 *                          userapi:
 *                              type: string
 *                              description: codigo del producto
 *                      required:
 *                          - userapi
 *                      example:
 *                          userapi: pedro
 *      responses:
 *          200:
 *              description: Acceso a la api, devuelve el token de conexion mas la fecha de vencimiento
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: object
 *                          properties:
 *                              userapi:
 *                                  type: string
 *                                  description: codigo del producto
 *                              contrasenna:
 *                                  type: string
 *                                  description: contraseña de conexion de user api
 *                          required:
 *                              - userapi
 *                              - contrasenna
 *                          example:
 *                              userapi: pedro
 *                              contrasenna: fsdsfs
 *          400:
 *              description: Existe un campo obligatorio no enviado
 *          401:
 *              description: El usuario no existe
 *          500:
 *              description: Error en la accion contacte al administrador
 */
rutas.put('/actualizarusuario', apiuser_controller_1.actualizarusuario);
/**
 * @swagger
 * /loggin:
 *  post:
 *      summary: Hacer loggin en la api
 *      tags: [User Api]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: Object
 *                      properties:
 *                          userapi:
 *                              type: string
 *                              description: codigo del producto
 *                          contrasenna:
 *                              type: string
 *                              description: contraseña de conexion de user api
 *                      required:
 *                          - userapi
 *                          - contrasenna
 *                      example:
 *                          userapi: pedro
 *                          contrasenna: fsdsfs
 *      responses:
 *          200:
 *              description: Acceso correcto de usuario
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/userapi'
 */
rutas.post('/loggin', apiuser_controller_1.loggin);
/**
 * @swagger
 * /loggout:
 *  post:
 *      summary: Eliminar token de acceso de un usuario solo accede administrador
 *      tags: [User Api]
 *      responses:
 *          200:
 *              description: Desconectado de la api un usuario, se ha eliminado su token
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/userapi'
 */
rutas.post('/loggout', apiuser_controller_1.loggout);
/**
 * @swagger
 * /register:
 *  post:
 *      summary: Registrar un usuario nuevo en la api
 *      tags: [User Api]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: Object
 *                      properties:
 *                          userapi:
 *                              type: string
 *                              description: codigo del producto
 *                          contrasenna:
 *                              type: string
 *                              description: contraseña de conexion de user api
 *                      required:
 *                          - userapi
 *                          - contrasenna
 *                      example:
 *                          userapi: pedro
 *                          contrasenna: fsdsfs
 *      responses:
 *          200:
 *              description: Registrar user de la api para conexion, devuelve token de acceso y fecha de vencimiento
 *              content:
 *                  application/json:
 *                      schemas:
 *                          type: array
 *                          items:
 *                              type: Object
 *                              properties:
 *                                  userapi:
 *                                      type: string
 *                                      description: codigo del producto
 *                                  contrasenna:
 *                                      type: string
 *                                      description: contraseña de conexion de user api
 *                              required:
 *                                  - userapi
 *                                  - contrasenna
 *                              example:
 *                                  userapi: pedro
 *                                  contrasenna: fsdsfs
 *          400:
 *              description: Existe un campo obligatorio no enviado
 *          401:
 *              description: El usuario que intenta insertar ya existe
 *          500:
 *              description: Error en la accion contacte al administrador
 */
rutas.post('/register', apiuser_controller_1.register);
/**
 * @swagger
 * /productos:
 *  get:
 *      summary: Retorna una lista de productos
 *      tags: [Get Productos]
 *      responses:
 *          200:
 *              description: Lista de productos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/productos'
 */
rutas.get('/productos', productos_controller_1.getProductos);
/**
 * @swagger
 * /productos:
 *  post:
 *      summary: Crea un producto
 *      tags: [Post Productos]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/productos'
 *      responses:
 *          200:
 *              description: Mensage de productos creado
 *              content:
 *                  text/plain:
 *                      type: string
 *                      example: Producto creado satisfactoriamente
 *          500:
 *              description: Error al adicionar un producto
 */
rutas.post('/productos', productos_controller_1.addProductos);
//rutas.get('/productos', getProductos);
//rutas.get('/productos', getProductos);
exports.default = rutas;
