import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Customer } from "./customer.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 120, unique: true })
  email: string;

  @Column()
  phone: number;

  @CreateDateColumn()
  date: Date;

  @ManyToOne(() => Customer)
  customer: Customer;
}

export { Contact };
