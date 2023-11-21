"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_1 = require("./swagger");
const rutas_1 = __importDefault(require("./routes/rutas"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const registrylog_1 = __importDefault(require("./lib/registrylog"));
const client_1 = require("@prisma/client");
dotenv_1.default.config();
console.log(process.env.PORTBD);
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
function checkDatabaseConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield prisma.$connect();
            console.log('La conexión a la base de datos se ha establecido correctamente.');
            // Aquí puedes iniciar tu API u otras operaciones después de que se haya establecido la conexión
        }
        catch (error) {
            console.error('Error al conectar con la base de datos:', error);
            // Aquí puedes manejar el error de conexión, como cerrar la aplicación o mostrar un mensaje de error
        }
        finally {
            yield prisma.$disconnect();
            console.log('La conexión a la base de datos se ha cerrado.');
        }
    });
}
app.set('port', process.env.PORT);
//middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, express_1.urlencoded)({ extended: false }));
app.use((0, morgan_1.default)('tiny', { stream: { write: (m) => registrylog_1.default.http(m.split('\n')[0]) } }));
const especificaciones = (0, swagger_jsdoc_1.default)(swagger_1.opciones);
app.use(rutas_1.default);
app.use('/', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(especificaciones));
//export default app;
app.listen(process.env.PORT);
console.log(checkDatabaseConnection());
console.log('Servidor ejecutando en el puerto', process.env.PORT);
