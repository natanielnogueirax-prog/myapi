import { Request, Response } from 'express';
import { UpdateRoleUseCase } from './UpdateRoleUseCase';

export class UpdateRoleController {
  constructor(private updateRoleUseCase: UpdateRoleUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;
    const role = await this.updateRoleUseCase.execute({ id, name });
    // Verifica se o role já existe, se sim retorna um erro 400, caso contrário cria o role e retorna o role criado com status 201

    return response.status(200).json(role);
  }
}
