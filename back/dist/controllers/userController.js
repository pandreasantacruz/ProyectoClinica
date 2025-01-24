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
exports.getUserById = exports.getUser = exports.createUser = void 0;
const userService_1 = require("../service/userService");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, birthday, nDniType, nDni } = req.body;
    const newUser = yield (0, userService_1.createUserService)({
        name,
        email,
        birthday,
        nDniType,
        nDni,
    });
    res.status(201).json(newUser);
});
exports.createUser = createUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, userService_1.getUserService)();
    res.status(201).json(users);
});
exports.getUser = getUser;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userIdParam = req.params.id; //Obtener el userId desde los parámetros de la ruta
    const userId = Number(userIdParam); //convertirlo en un número
    const user = yield (0, userService_1.getUserByIdService)(userId); // Llamar a la función con el id
    res.status(200).json(user);
});
exports.getUserById = getUserById;
