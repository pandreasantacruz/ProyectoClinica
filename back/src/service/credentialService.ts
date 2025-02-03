import ICredentialDto from "../dto/credentialDto";
import { AppDataSource } from "../config/data-source";
import { Credentials } from "../entities/credentials";

export const saveCredentials = async (userData: ICredentialDto) => {
  try {
    const newCredentials =
      AppDataSource.getRepository(Credentials).create(userData);
    await AppDataSource.getRepository(Credentials).save(newCredentials);
  } catch (error) {
    console.error("Error at save credentials", error);
    throw error;
  }
};
export const createUsernPassword = async (
  userData: ICredentialDto
): Promise<Credentials["id"]> => {
  try {
    const newPassword = Math.floor(Math.random() * 500)
      .toString(36)
      .slice(-8);

    const newCredentials = AppDataSource.getRepository(Credentials).create({
      ...userData,
      newPassword: newPassword,
    });

    await AppDataSource.getRepository(Credentials).save(newCredentials); // Guarda el usuario en la base de datos
    return newCredentials.id;
  } catch (error) {
    console.error("Error at create User n Password", error);
    throw error;
  }
};

export const getIdCredentials = async (
  username: string,
  password: string
): Promise<Credentials["id"] | null> => {
  try {
    const credentials = await AppDataSource.getRepository(
      Credentials
    ).findOneBy({
      username,
    });
    if (credentials) {
      if (credentials.newPassword === password) {
        return credentials.id;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.error("getIdCredentials", error);
    throw error;
  }
};
