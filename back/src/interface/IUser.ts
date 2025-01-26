import ICredential from "./ICredentials";

interface IUser {
  id: number;
  name: string;
  email: string;
  birthday: string;
  nDniType: string;
  nDni: number;
}

export default IUser;
