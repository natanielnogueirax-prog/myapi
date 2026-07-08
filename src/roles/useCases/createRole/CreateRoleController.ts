import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateRoleUseCase } from './CreateRoleUseCase';

export class CreateRoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const createRoleUseCase = container.resolve(CreateRoleUseCase);
    const { name } = request.body;
    const role = await createRoleUseCase.execute({ name });
    // Verifica se o role já existe, se sim retorna um erro 400, caso contrário cria o role e retorna o role criado com status 201

    return response.status(201).json(role);
  }
}
