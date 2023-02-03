import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Contact } from "./contact.entity";
import { Exclude } from "class-transformer";

@Entity("customers")
class Customer {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 120, unique: true })
  email: string;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @Column()
  phone: number;

  @CreateDateColumn()
  date: Date;

  @OneToMany(() => Contact, (contact) => contact.customer, {
    eager: true,
  })
  contacts: Contact[];
}

export { Customer };
