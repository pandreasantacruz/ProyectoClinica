import { text } from "stream/consumers";
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";
import { User } from "./user";
import status from "../interface/emutStatus";

@Entity({ name: "appointments" })
export class Appointments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column()
  time: string;

  @Column({ type: "enum", enum: status, default: status.Programada })
  status: string;

  @Column("text")
  medicalHistory: string;

  @Column("text")
  reasonConsultation: string;

  @ManyToOne(() => User, (user) => user.appointments)
  @JoinColumn({ name: "userId" })
  user: User;
  @Column()
  userId: number;
}
