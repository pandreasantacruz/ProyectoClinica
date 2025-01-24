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
exports.getUserByIdService = exports.getUserService = exports.createUserService = void 0;
const users = [
    {
        id: 1,
        name: "Juan Pérez",
        birthday: "23octubre1994",
        nDniType: "cedula",
        nDni: 123456,
        email: "juan@example.com",
        credentialsId: 553,
    },
    {
        id: 2,
        name: "Ana García",
        birthday: "23octubre1994",
        nDniType: "pasaporte",
        nDni: 654321,
        email: "ana@example.com",
        credentialsId: 554,
    },
];
let id = 3;
let credentialsId = 555;
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        id,
        name: userData.name,
        email: userData.email,
        birthday: userData.birthday,
        nDniType: userData.nDniType,
        nDni: userData.nDni,
        credentialsId,
    };
    users.push(newUser);
    id++;
    credentialsId++;
    return newUser;
});
exports.createUserService = createUserService;
const getUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    return users;
});
exports.getUserService = getUserService;
const getUserByIdService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = users.find((user) => user.id === userId);
    return user || null;
});
exports.getUserByIdService = getUserByIdService;
