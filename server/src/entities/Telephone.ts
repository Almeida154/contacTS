import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Contact } from './Contact';

@Entity('telephone')
export class Telephone {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  number: string;

  @Column()
  contact_id: string;

  @ManyToOne(() => Contact, contact => contact.telephones)
  @JoinColumn({ name: 'contact_id' })
  contact: Contact;
}
