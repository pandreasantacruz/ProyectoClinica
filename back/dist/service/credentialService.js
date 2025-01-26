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
exports.getIdCredentials = exports.createUsernPassword = void 0;
const credentials = [
    { id: 5, username: "Hola", newPassword: "SOYPaula" },
    { id: 2, username: "exampleUser", newPassword: "examplePassword" },
    { id: 3, username: "exampleUser", newPassword: "examplePassword" },
];
let id = 4;
const randomNumber = Math.floor(Math.random() * 5000);
const createUsernPassword = (credentialsData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        id++;
        const newCredentials = {
            id,
            username: credentialsData.username.toUpperCase(),
            newPassword: `${credentialsData.password}${randomNumber}`,
        };
        credentials.push(newCredentials);
        return newCredentials.id;
    }
    catch (error) {
        console.error("createUsernPassword", error);
        throw error;
    }
});
exports.createUsernPassword = createUsernPassword;
const getIdCredentials = (username, password) => {
    try {
        const userVerification = credentials.find((user) => user.username === username);
        if (userVerification && userVerification.newPassword === password) {
            return userVerification.id;
        }
        return null;
    }
    catch (error) {
        console.error("getIdCredentials", error);
        throw error;
    }
};
exports.getIdCredentials = getIdCredentials;
console.log((0, exports.getIdCredentials)("Hola", "SOYPaula"), "Pruebilla");
