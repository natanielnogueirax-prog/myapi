import { RolesRepository } from '@roles/repositories/RolesRepository';
import { createRoleController } from '@roles/useCases/createRole';
import { Router } from 'express';

// instancia do routes
const rolesRouter = Router();
const rolesRepository = new RolesRepository();

// Rota de post para criar, chama o created do repository passando o name do body da requisição,
// e retorna o role criado com status 201
rolesRouter.post('/', (request, response) => {
  return createRoleController.handle(request, response);
});

// Rota get lista as informações usando o find all
rolesRouter.get('/', (request, response) => {
  const roles = rolesRepository.findAll();

  return response.json(roles);
});

export { rolesRouter };
