import { RolesRepository } from '@roles/repositories/RolesRepository';
import { ListRolesUseCase } from './ListRolesUseCase';
import { ListRolesController } from './ListRolesController';

const rolesRepository = RolesRepository.getIntance();

const listRolesUseCase = new ListRolesUseCase(rolesRepository);

export const listRolesController = new ListRolesController(listRolesUseCase);
