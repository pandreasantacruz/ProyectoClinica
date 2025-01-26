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
const data_source_1 = require("../config/data-source");
const user_1 = require("../entities/user");
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = data_source_1.AppDataSource.getRepository(user_1.User).create(userData);
        yield data_source_1.AppDataSource.getRepository(user_1.User).save(user); // Guarda el usuario en la base de datos
        return user;
    }
    catch (error) {
        console.log("Error CreateUserService", error);
        throw error;
    }
});
exports.createUserService = createUserService;
//   try {
//     const newUser: IUser = {
//       id,
//       name: userData.name,
//       email: userData.email,
//       birthday: userData.birthday,
//       nDniType: userData.nDniType,
//       nDni: userData.nDni,
//       credentialsId,
//     };
//     users.push(newUser);
//     id++;
//     credentialsId++;
//     return newUser;
//   } catch (error) {
//     console.log("Error CreateUserService", error);
//   }
//   throw error;
// };
const getUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield data_source_1.AppDataSource.getRepository(user_1.User).find();
        return users;
    }
    catch (error) {
        console.log("Error Get User Service ", error);
        throw error;
    }
});
exports.getUserService = getUserService;
const getUserByIdService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield data_source_1.AppDataSource.getRepository(user_1.User).findOneBy({
            id: userId,
        });
        return user || null;
    }
    catch (error) {
        console.log("Error Get User By Id Service", error);
        throw error;
    }
});
exports.getUserByIdService = getUserByIdService;
