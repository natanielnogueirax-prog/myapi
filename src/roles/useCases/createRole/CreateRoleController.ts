import { Request, Response } from 'express';
import { RolesRepository } from '@roles/repositories/RolesRepository';
import { AppError } from '@shared/errors/AppError';

export class CreateRoleController {
  handle(request: Request, response: Response): Response {
    const { name } = request.body;
    const rolesRepository = new RolesRepository();
    // Verifica se o role já existe, se sim retorna um erro 400, caso contrário cria o role e retorna o role criado com status 201
    const roleAlreadyExists = rolesRepository.findByName(name);
    if (roleAlreadyExists) {
      throw new AppError('Role already exists');
    }
    const role = rolesRepository.create({ name });
    return response.status(201).json(role);
  }
}
