import { Request, Response } from "express";
import {
  createUserService,
  getUserService,
  getUserByIdService,
} from "../service/userService";
import IUser from "../interface/IUser";

export const createUser = async (req: Request, res: Response) => {
  const { name, idType, personalId, email, active } = req.body;
  const newUser: IUser = await createUserService({
    name,
    idType,
    personalId,
    email,
    active,
  });
  res.status(201).json(newUser);
};

export const getUser = async (req: Request, res: Response) => {
  const users: IUser[] = await getUserService();
  res.status(201).json(users);
};
export const getUserById = async (req: Request, res: Response) => {
  const userIdParam = req.params.id; //Obtener el userId desde los parámetros de la ruta
  console.log("Parámetro id desde la URL:", userIdParam);
  const userId = Number(userIdParam); //convertirlo en un número
  const user: IUser | null = await getUserByIdService(userId); // Llamar a la función con el id
  res.status(200).json(user);
};
