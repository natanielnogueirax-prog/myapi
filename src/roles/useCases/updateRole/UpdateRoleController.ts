import { Request, Response } from 'express';
import { UpdateRoleUseCase } from './UpdateRoleUseCase';
import { container } from 'tsyringe';

export class UpdateRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateRoleUseCase = container.resolve(UpdateRoleUseCase);
    const { id } = request.params as { id: string };
    const { name } = request.body;
    const role = await updateRoleUseCase.execute({ id, name });
    // Verifica se o role já existe, se sim retorna um erro 400, caso contrário cria o role e retorna o role criado com status 201

    return response.status(200).json(role);
  }
}
