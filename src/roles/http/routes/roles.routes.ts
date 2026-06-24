import { createRoleController } from '@roles/useCases/createRole';
import { deleteRoleController } from '@roles/useCases/deleteRole';
import { listRolesController } from '@roles/useCases/listRoles';
import { showRoleController } from '@roles/useCases/showRole';
import { updateRoleController } from '@roles/useCases/updateRole';
import { Router } from 'express';

// instancia do routes
const rolesRouter = Router();

// Rota de post para criar, chama o created do repository passando o name do body da requisição,
// e retorna o role criado com status 201
rolesRouter.post('/', (request, response) => {
  return createRoleController.handle(request, response);
});

// Rota get lista as informações usando o find all
rolesRouter.get('/', (request, response) => {
  return listRolesController.handle(request, response);
});

// Busca um id especifico, findById
rolesRouter.get('/:id', (request, response) => {
  return showRoleController.handle(request, response);
});
// Atualiza role pelo id, findById para buscar e save para salvar a atualização
rolesRouter.put('/:id', (request, response) => {
  return updateRoleController.handle(request, response);
});

rolesRouter.delete('/:id', (request, response) => {
  return deleteRoleController.handle(request, response);
});

export { rolesRouter };
