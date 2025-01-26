import { text } from "stream/consumers";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "appointments" })
export class Appointments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userid: number;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  status: string;

  @Column("text")
  medicalHistory: string;

  @Column("text")
  reasonConsultation: string;
}
