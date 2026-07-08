import {
  IRolesRepository,
  RolesPaginatePropierties,
} from '@roles/repositories/IRolesRepository';
import { inject, injectable } from 'tsyringe';

type ListRolesUseCaseParams = {
  page: number;
  limit: number;
};

@injectable()
export class ListRolesUseCase {
  constructor(
    @inject('RolesRpository')
    private rolesRepository: IRolesRepository,
  ) {}

  async execute({
    limit,
    page,
  }: ListRolesUseCaseParams): Promise<RolesPaginatePropierties> {
    // take vem do repositorio de roles
    const take = limit;
    const skip = (Number(page) - 1) * take;
    return this.rolesRepository.findAll({ page, skip, take });
  }
}
