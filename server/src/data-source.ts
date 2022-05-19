import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { Contact } from './entities/Contact';
import { Email } from './entities/Email';
import { Telephone } from './entities/Telephone';

import { CreateContactTable } from './migrations/CreateContactTable';
import { CreateEmailTable } from './migrations/CreateEmailTable';
import { CreateTelephoneTable } from './migrations/CreateTelephoneTable';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'root',
  password: 'challenge',
  database: 'esferasoftware',
  synchronize: true,
  logging: false,
  entities: [Contact, Email, Telephone],
  migrations: [CreateContactTable, CreateEmailTable, CreateTelephoneTable],
});
