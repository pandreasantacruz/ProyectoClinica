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
  synchronize: true,
  logging: true,
  entities: [User, Appointments, Credentials],
  subscribers: [],
  migrations: [],
});
