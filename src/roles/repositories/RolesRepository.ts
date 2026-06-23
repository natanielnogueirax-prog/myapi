import { Role } from '@roles/entities/Role';
import { dataSource } from '@shared/typeorm';
import { Repository } from 'typeorm';
// DTO - Data Transfer Object - é um padrão de projeto usado para transferir dados entre camadas ou sistemas.
// Ele é uma representação simplificada de um objeto complexo, contendo apenas os dados necessários para a transferência.
// O DTO é usado para evitar o acoplamento entre as camadas e para melhorar a performance, reduzindo a quantidade de dados transferidos.
// Ele pode ser usado em conjunto com padrões como o Repository e o Service para organizar a lógica de negócios e a persistência de dados em uma aplicação.
// Rota role - POST /roles - criar um novo role objeto tem id que vem do uuid, name onde é  usado o DTO e created_at que é a data de criação do role
type CreateRoleDTO = {
  name: string;
};

export type PaginateParams = {
  page: number;
  skip: number;
  take: number;
};

export type RolesPaginatePropierties = {
  per_page: number;
  total: number;
  current_page: number;
  data: Role[];
};

export class RolesRepository {
  private repository: Repository<Role>;
  private static INSTANCE: RolesRepository;

  private constructor() {
    this.repository = dataSource.getRepository(Role);
  }

  public static getIntance(): RolesRepository {
    if (!RolesRepository.INSTANCE) {
      RolesRepository.INSTANCE = new RolesRepository();
    }
    return RolesRepository.INSTANCE;
  }

  async create({ name }: CreateRoleDTO): Promise<Role> {
    const role = this.repository.create({ name });
    return this.repository.save(role);
  }

  async save(role: Role): Promise<Role> {
    return this.repository.save(role);
  }

  async delete(role: Role): Promise<void> {
    await this.repository.remove(role);
  }

  async findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<RolesPaginatePropierties> {
    const [roles, count] = await this.repository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: roles,
    };
    return result;
  }

  async findByName(name: string): Promise<Role | null> {
    return this.repository.findOneBy({ name });
  }

  async findById(id: string): Promise<Role | null> {
    return this.repository.findOneBy({ id });
  }
}
