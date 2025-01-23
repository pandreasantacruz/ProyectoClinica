import IUser from "./IUser";

interface ICredential {
  id: number;
  idUser: IUser;
  name: string;
  email: string;
  password: string;
}

export default ICredential;
