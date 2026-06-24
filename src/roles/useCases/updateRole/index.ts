import { RolesRepository } from '@roles/repositories/RolesRepository';
import { UpdateRoleUseCase } from './UpdateRoleUseCase';
import { UpdateRoleController } from './UpdateRoleController';

const rolesRepository = RolesRepository.getIntance();

const updateRoleUseCase = new UpdateRoleUseCase(rolesRepository);

export const updateRoleController = new UpdateRoleController(updateRoleUseCase);
