import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Contact } from './Contact';

@Entity('email')
export class Email {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @Column()
  contact_id: string;

  @ManyToOne(() => Contact, contact => contact.emails)
  @JoinColumn({ name: 'contact_id' })
  contact: Contact;
}
