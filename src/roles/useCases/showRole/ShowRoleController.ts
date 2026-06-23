import { Request, Response } from 'express';
import { ShowRoleUseCase } from './ShowRoleUseCase';

export class ShowRoleController {
  constructor(private showRoleUseCase: ShowRoleUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const role = await this.showRoleUseCase.execute({ id });
    // Verifica se o role já existe, se sim retorna um erro 400, caso contrário cria o role e retorna o role criado com status 201

    return response.status(200).json(role);
  }
}
