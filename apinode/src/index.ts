import express, { urlencoded } from "express";
import cors from "cors";
import swagger from "swagger-ui-express";
import swaggerdocs from "swagger-jsdoc";
import { opciones } from "./swagger";
import rutas from './routes/rutas';
import Database from "./dbsequelize";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.PORTBD);

const app = express();
const db = new Database();
app.set('port', process.env.PORT);

app.use(cors());
app.use(express.json());
app.use(urlencoded({extended: false}));
  
const especificaciones = swaggerdocs(opciones);

app.use(rutas);
app.use('/', swagger.serve, swagger.setup(especificaciones));

//export default app;
app.listen(process.env.PORT);
db.sequelize?.sync();
console.log('Servidor ejecutando en el puerto', process.env.PORT);