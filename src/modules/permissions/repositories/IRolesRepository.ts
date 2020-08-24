import Role from '@modules/permissions/infra/typeorm/entities/Role';
import ICreateRoleDTO from '@modules/permissions/dtos/ICreateRoleDTO';

export default interface IRolesRepository {
  find(): Promise<Role[]>;
  findById(id: string): Promise<Role | undefined>;
  findByLabel(label: string): Promise<Role | undefined>;
  create(data: ICreateRoleDTO): Promise<Role>;
  save(Role: Role): Promise<Role>;
  delete(id: string): Promise<void>;
}
