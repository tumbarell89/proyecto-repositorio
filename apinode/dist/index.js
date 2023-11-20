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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_1 = require("./swagger");
const rutas_1 = __importDefault(require("./routes/rutas"));
const dbsequelize_1 = __importDefault(require("./dbsequelize"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log(process.env.PORTBD);
const app = (0, express_1.default)();
const db = new dbsequelize_1.default();
app.set('port', process.env.PORT);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, express_1.urlencoded)({ extended: false }));
const especificaciones = (0, swagger_jsdoc_1.default)(swagger_1.opciones);
app.use(rutas_1.default);
app.use('/', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(especificaciones));
//export default app;
app.listen(process.env.PORT);
(_a = db.sequelize) === null || _a === void 0 ? void 0 : _a.sync();
console.log('Servidor ejecutando en el puerto', process.env.PORT);
