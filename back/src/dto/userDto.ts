import { Credentials } from "../entities/credentials";

interface UserDto {
  name: string;
  email: string;
  birthday: Date;
  nDniType: string;
  nDni: number;
  newPassword: string;
  username: string;
  credentials: Credentials;
}
export default UserDto;
