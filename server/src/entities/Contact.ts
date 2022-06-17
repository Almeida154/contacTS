import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

import { Email } from './Email';
import { Telephone } from './Telephone';

@Entity('contact')
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  cpf: string;

  @OneToMany(() => Email, email => email.contact)
  emails: Email[];

  @OneToMany(() => Telephone, telephone => telephone.contact)
  telephones: Telephone[];
}
