import { createRoleController } from '@roles/useCases/createRole';
import { listRolesController } from '@roles/useCases/listRoles';
import { showRoleController } from '@roles/useCases/showRole';
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

rolesRouter.get('/:id', (request, response) => {
  return showRoleController.handle(request, response);
});

export { rolesRouter };
