import { Request, Response } from "express";
import {
  createUserService,
  getUserService,
  getUserByIdService,
  loginService,
} from "../service/user";
import { AppDataSource } from "../config/data-source";
import { saveCredentials } from "../service/credentialService";
import { User } from "../entities/user";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, birthday, nDniType, nDni, username, newPassword } =
      req.body;
    const newCredentials = await saveCredentials({
      username,
      newPassword,
    });
    const newUser: User = await createUserService({
      name,
      email,
      birthday,
      nDniType,
      nDni,
      username,
      newPassword,
      credentials: newCredentials,
    });

    res
      .status(201)
      .json({ message: "User created successfully", newUser, newCredentials });
  } catch (error) {
    console.log("Error Controller createUser", error);
    res.status(400).json({ message: "User could not be registered", error });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getUserService();
    res.status(200).json({ message: "Users retrieved successfully", users });
  } catch (error) {
    console.log("Error Controller get User", error);
    res
      .status(404)
      .json({ message: "An error occurred while retrieving the users", error });
  }
};
export const getUserById = async (req: Request, res: Response) => {
  try {
    const userIdParam = req.params.id; //Obtener el userId desde los parámetros de la ruta
    const userId = Number(userIdParam); //convertirlo en un número
    const user = await getUserByIdService(userId); // Llamar a la función con el id
    res.status(200).json({ message: "User retrieved successfully", user });
  } catch (error) {
    console.log("Error at get User By Id Controller", error);
    res
      .status(404)
      .json({ message: "An error occurred while retrieving the user", error });
  }
};
export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, newPassword } = req.body;
    const response = await loginService(email, newPassword);

    res.status(200).json(response);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "An unexpected error occurred" });
    }
  }
};
