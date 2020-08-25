import Role from '@modules/permissions/infra/typeorm/entities/Role';
import ICreateRoleDTO from '@modules/permissions/dtos/ICreateRoleDTO';
import Permission from '@modules/permissions/infra/typeorm/entities/Permission';

export default interface IRolesRepository {
  find(): Promise<Role[]>;
  findById(id: string): Promise<Role | undefined>;
  findByLabel(label: string): Promise<Role | undefined>;
  create(data: ICreateRoleDTO): Promise<Role>;
  save(role: Role): Promise<Role>;
  delete(id: string): Promise<void>;
  savePermissions(role: Role, permissions: Permission[]): Promise<Role>;
}
