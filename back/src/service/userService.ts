import IUser from "../interface/IUser";
import UserDto from "../dto/userDto";

const users: IUser[] = [
  {
    id: 1,
    name: "Juan Pérez",
    idType: "cedula",
    personalId: 123456,
    email: "juan@example.com",
    active: true,
  },
  {
    id: 2,
    name: "Ana García",
    idType: "pasaporte",
    personalId: 654321,
    email: "ana@example.com",
    active: true,
  },
];
let id: number = 1;

export const createUserService = async (userData: UserDto): Promise<IUser> => {
  const newUser: IUser = {
    id,
    name: userData.name,
    idType: userData.idType,
    personalId: userData.personalId,
    email: userData.email,
    active: userData.active,
  };
  users.push(newUser);
  id++;
  return newUser;
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
