import ICredential from "./ICredentials";
import { nDniType } from "./emunbDniType";

export interface IUser {
  id: number;
  name: string;
  email: string;
  birthday: Date;
  nDniType: nDniType;
  nDni: number;
  idCredentials: number;
  username: string;
  password: string;
}
