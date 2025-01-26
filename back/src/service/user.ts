import IUser from "../interface/IUser";
import UserDto from "../dto/userDto";
import { error } from "console";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user";
import { promises } from "dns";

export const createUserService = async (userData: UserDto): Promise<User> => {
  try {
    const user = AppDataSource.getRepository(User).create(userData);
    await AppDataSource.getRepository(User).save(user); // Guarda el usuario en la base de datos
    return user;
  } catch (error) {
    console.log("Error CreateUserService", error);
    throw error;
  }
};
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

export const getUserService = async () => {
  try {
    const users = await AppDataSource.getRepository(User).find();
    return users;
  } catch (error) {
    console.log("Error Get User Service ", error);
    throw error;
  }
};

export const getUserByIdService = async (
  userId: number
): Promise<User | null> => {
  try {
    const user = await AppDataSource.getRepository(User).findOneBy({
      id: userId,
    });
    return user || null;
  } catch (error) {
    console.log("Error Get User By Id Service", error);
    throw error;
  }
};
