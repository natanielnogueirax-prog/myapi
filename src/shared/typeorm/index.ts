import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'better-sqlite3',
  database: './db.sqlite',
  entities: [],
  migrations: [],
});
