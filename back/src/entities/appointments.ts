import { text } from "stream/consumers";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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
  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
}
