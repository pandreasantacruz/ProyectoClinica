"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("../entities/user");
const appointments_1 = require("../entities/appointments");
const credentials_1 = require("../entities/credentials");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Jack92102371153.",
    database: "mod3",
    synchronize: true,
    logging: true,
    entities: [user_1.User, appointments_1.Appointments, credentials_1.Credentials],
    subscribers: [],
    migrations: [],
});
