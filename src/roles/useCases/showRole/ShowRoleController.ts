import { Request, Response } from 'express';
import { ShowRoleUseCase } from './ShowRoleUseCase';
import { container } from 'tsyringe';

export class ShowRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showRoleUseCase = container.resolve(ShowRoleUseCase);
    const { id } = request.params;
    const role = await showRoleUseCase.execute({ id });
    // Verifica se o role já existe, se sim retorna um erro 400, caso contrário cria o role e retorna o role criado com status 201

    return response.status(200).json(role);
  }
}
