import { DataSource } from 'typeorm';
import { CreateRolesTable1782174927106 } from './migrations/1782174927106-CreateRolesTable';

export const dataSource = new DataSource({
  type: 'better-sqlite3',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1782174927106],
});
