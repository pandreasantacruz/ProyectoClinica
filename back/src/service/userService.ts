import IUser from "../interface/IUser";
import UserDto from "../dto/userDto";
import { error } from "console";

const users: IUser[] = [
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
let id: number = 3;
let credentialsId: number = 555;

export const createUserService = async (userData: UserDto): Promise<IUser> => {
  try {
    const newUser: IUser = {
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
  } catch (error) {
    console.log("Error CreateUserService", error);
  }
  throw error;
};

export const getUserService = async (): Promise<IUser[]> => {
  return users;
};
export const getUserByIdService = async (
  userId: number
): Promise<IUser | null> => {
  const user = users.find((user) => user.id === userId);
  return user || null;
};
