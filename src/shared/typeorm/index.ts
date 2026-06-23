import { DataSource } from 'typeorm';
import { CreateRolesTable1782174927106 } from './migrations/1782174927106-CreateRolesTable';
import { Role } from '@roles/entities/Role';

export const dataSource = new DataSource({
  type: 'better-sqlite3',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1782174927106],
});
