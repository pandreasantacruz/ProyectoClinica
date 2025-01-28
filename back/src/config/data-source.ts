import { DataSource } from "typeorm";
import { User } from "../entities/user";
import { Appointments } from "../entities/appointments";
import { Credentials } from "../entities/credentials";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Jack92102371153.",
  database: "mod3",
  //dropSchema: true, //para borrar base de datos cuando este en true
  synchronize: true,
  logging: true,
  entities: [User, Appointments, Credentials],
  subscribers: [],
  migrations: [],
});
