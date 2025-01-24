import ICredential from "./ICredentials";

interface IUser {
  id: number;
  name: string;
  email: string;
  birthday: string;
  nDniType: string;
  nDni: number;
  credentialsId: ICredential["id"];
}

export default IUser;
