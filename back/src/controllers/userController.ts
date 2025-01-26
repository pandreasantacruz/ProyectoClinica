import { Request, Response } from "express";
import {
  createUserService,
  getUserService,
  getUserByIdService,
} from "../service/user";
import IUser from "../interface/IUser";
import { User } from "../entities/user";

export const createUser = async (req: Request, res: Response) => {
  try {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.nDniType ||
      !req.body.nDni ||
      !req.body.username ||
      !req.body.password ||
      !req.body.birthday
    ) {
      throw new Error("Todos datos son obligatorios.");
    }
    const { name, email, birthday, nDniType, nDni, username, password } =
      req.body;
    const newUser: User = await createUserService({
      name,
      email,
      birthday,
      nDniType,
      nDni,
      username,
      password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log("Error Controller createUser", error);
    throw error;
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getUserService();
    res.status(200).json(users);
  } catch (error) {
    console.log("Error Controller getUser", error);
    throw error;
  }
};
export const getUserById = async (req: Request, res: Response) => {
  try {
    const userIdParam = req.params.id; //Obtener el userId desde los parámetros de la ruta
    const userId = Number(userIdParam); //convertirlo en un número
    const user = await getUserByIdService(userId); // Llamar a la función con el id
    res.status(200).json(user);
  } catch (error) {
    console.log("Error CreateUserService", error);
    throw error;
  }
};
