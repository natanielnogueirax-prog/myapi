import { Role } from '@roles/entities/Role';

// DTO - Data Transfer Object - é um padrão de projeto usado para transferir dados entre camadas ou sistemas.
// Ele é uma representação simplificada de um objeto complexo, contendo apenas os dados necessários para a transferência.
// O DTO é usado para evitar o acoplamento entre as camadas e para melhorar a performance, reduzindo a quantidade de dados transferidos.
// Ele pode ser usado em conjunto com padrões como o Repository e o Service para organizar a lógica de negócios e a persistência de dados em uma aplicação.
// Rota role - POST /roles - criar um novo role objeto tem id que vem do uuid, name onde é  usado o DTO e created_at que é a data de criação do role
type CreateRoleDTO = {
  name: string;
};

export class RolesRepository {
  private roles: Role[];
  private static INSTANCE: RolesRepository;

  private constructor() {
    this.roles = [];
  }

  public static getIntance(): RolesRepository {
    if (!RolesRepository.INSTANCE) {
      RolesRepository.INSTANCE = new RolesRepository();
    }
    return RolesRepository.INSTANCE;
  }
  create({ name }: CreateRoleDTO): Role {
    const role = new Role();

    Object.assign(role, {
      name,
      created_at: new Date(),
    });

    this.roles.push(role);
    return role;
  }

  findAll(): Role[] {
    return this.roles;
  }

  findByName(name: string): Role | undefined {
    return this.roles.find(role => {
      return role.name === name;
    });
  }
}
