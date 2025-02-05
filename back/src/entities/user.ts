import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credentials } from "./credentials";
import { Appointments } from "./appointments";
import { nDniType } from "../interface/emunbDniType";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column({ unique: true })
  //@isEmail()
  email: string;

  @Column({ type: "date" })
  birthday: Date;

  @Column({
    type: "enum",
    enum: nDniType,
  })
  @Column({ unique: true })
  nDni: number;

  @OneToOne(() => Credentials)
  @JoinColumn({ name: "credentialsId" })
  credentials: Credentials;

  @OneToMany(() => Appointments, (appointments) => appointments.user)
  appointments: Appointments[];
}
