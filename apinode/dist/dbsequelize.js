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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const apiuser_1 = __importDefault(require("./models/apiuser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Database {
    constructor() {
        this.connectToDatabase();
    }
    connectToDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            this.sequelize = new sequelize_typescript_1.Sequelize({
                database: "apiportafolio",
                username: "postgres",
                password: "postgres",
                host: "172.22.48.1",
                dialect: "postgres",
                logging: true,
                define: {
                    timestamps: false
                },
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                },
                models: [apiuser_1.default]
            });
            yield this.sequelize
                .authenticate()
                .then(() => {
                console.log("Connection has been established successfully.");
            })
                .catch((err) => {
                console.error("Unable to connect to the Database:", err);
            });
        });
    }
}
exports.default = Database;
