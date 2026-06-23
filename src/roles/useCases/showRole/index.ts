import { RolesRepository } from '@roles/repositories/RolesRepository';
import { ShowRoleUseCase } from './ShowRoleUseCase';
import { ShowRoleController } from './ShowRoleController';

const rolesRepository = RolesRepository.getIntance();

const showRoleUseCase = new ShowRoleUseCase(rolesRepository);

export const showRoleController = new ShowRoleController(showRoleUseCase);
