import { Request, Response } from 'express';
import { DeleteRoleUseCase } from './DeleteRoleUseCase';

export class DeleteRoleController {
  constructor(private deleteRoleUseCase: DeleteRoleUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params as { id: string };
    await this.deleteRoleUseCase.execute({ id });
    // Verifica se o role já existe, se sim retorna um erro 400, caso contrário cria o role e retorna o role criado com status 201

    return response.status(200).send();
  }
}
