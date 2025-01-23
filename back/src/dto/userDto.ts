import idType from "../interface/EnumIdType";

interface UserDto {
  name: string;
  idType: idType;
  personalId: number;
  email: string;
  active: boolean;
}
export default UserDto;
