import { DataSource } from 'typeorm';
import { CreateRolesTable1782174927106 } from './migrations/1782174927106-CreateRolesTable';
import { Role } from '@roles/entities/Role';
import { CreateUsersTable1785971546625 } from './migrations/1785971546625-CreateUsersTable';
import { AddRoleIdToUsersTable1785972820658 } from './migrations/1785972820658-AddRoleIdToUsersTable';

export const dataSource = new DataSource({
  type: 'better-sqlite3',
  database: './db.sqlite',
  entities: [Role],
  migrations: [
    CreateRolesTable1782174927106,
    CreateUsersTable1785971546625,
    AddRoleIdToUsersTable1785972820658,
  ],
});
