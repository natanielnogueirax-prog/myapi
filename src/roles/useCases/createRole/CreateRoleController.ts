import { Request, Response } from 'express';
import { CreateRoleUseCase } from './CreateRoleUseCase';

export class CreateRoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name } = request.body;
    const role = this.createRoleUseCase.execute({ name });
    // Verifica se o role já existe, se sim retorna um erro 400, caso contrário cria o role e retorna o role criado com status 201

    return response.status(201).json(role);
  }
}
