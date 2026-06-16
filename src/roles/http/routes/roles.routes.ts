import { RolesRepository } from '@roles/repositories/RolesRepository';
import { Router } from 'express';

// instancia do routes
const rolesRouter = Router();
const rolesRepository = new RolesRepository();

// Rota de post para criar, chama o created do repository passando o name do body da requisição,
// e retorna o role criado com status 201
rolesRouter.post('/', (request, response) => {
  const { name } = request.body;
  const role = rolesRepository.create({ name });

  return response.status(201).json(role);
});

// Rota get lista as informações usando o find all
rolesRouter.get('/', (request, response) => {
  const roles = rolesRepository.findAll();

  return response.json(roles);
});

export { rolesRouter };
