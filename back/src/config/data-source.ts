import { DataSource } from "typeorm";
import { HOST, PORT_PG, USERNAME, PASSWORD, DATABASE } from "./envs";
import { User } from "../entities/user";
import { Appointments } from "../entities/appointments";
import { Credentials } from "../entities/credentials";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: HOST,
  port: Number(PORT_PG),
  username: USERNAME,
  password: PASSWORD,
  database: DATABASE,
  //dropSchema: true, //para borrar base de datos cuando este en trueholla
  synchronize: true,
  logging: true,
  entities: [User, Appointments, Credentials],
  subscribers: [],
  migrations: [],
});
