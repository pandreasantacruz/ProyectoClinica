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
exports.createUsernPassword = void 0;
const credentials = [
    { id: 1, username: "exampleUser", newPassword: "examplePassword" },
    { id: 2, username: "exampleUser", newPassword: "examplePassword" },
    { id: 3, username: "exampleUser", newPassword: "examplePassword" },
];
let id = 4;
const randomNumber = Math.floor(Math.random() * 5000);
const createUsernPassword = (credentialsData) => __awaiter(void 0, void 0, void 0, function* () {
    id++;
    const newCredentials = {
        id,
        username: credentialsData.username.toUpperCase(),
        newPassword: `${credentialsData.newPassword}${randomNumber}`,
    };
    credentials.push(newCredentials);
    return newCredentials.id;
});
exports.createUsernPassword = createUsernPassword;
//export const getIdCredentials = async (credentialsData:ICredential):Promise:<idCredentials> =>{
//}
