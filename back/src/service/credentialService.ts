import ICredential from "../interface/ICredentials";
const credentials: ICredential[] = [
  { id: 5, username: "Hola", newPassword: "SOYPaula" },
  { id: 2, username: "exampleUser", newPassword: "examplePassword" },
  { id: 3, username: "exampleUser", newPassword: "examplePassword" },
];
let id: number = 4;
const randomNumber = Math.floor(Math.random() * 5000);
export const createUsernPassword = async (
  credentialsData: ICredential
): Promise<ICredential["id"]> => {
  try {
    id++;
    const newCredentials: ICredential = {
      id,
      username: credentialsData.username.toUpperCase(),
      newPassword: `${credentialsData.newPassword}${randomNumber}`,
    };

    credentials.push(newCredentials);

    return newCredentials.id;
  } catch (error) {
    console.error("createUsernPassword", error);
    throw error;
  }
};

export const getIdCredentials = (
  username: string,
  password: string
): ICredential["id"] | null => {
  try {
    const userVerification = credentials.find(
      (user) => user.username === username
    );
    if (userVerification && userVerification.newPassword === password) {
      return userVerification.id;
    }
    return null;
  } catch (error) {
    console.error("getIdCredentials", error);
    throw error;
  }
};

console.log(getIdCredentials("Hola", "SOYPaula"), "Pruebilla");
