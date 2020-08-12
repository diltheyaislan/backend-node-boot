import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

interface IUser {
  name: string;
  email: string;
  password: string;
}

@injectable()
class SetupService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute(): Promise<string> {
    // Create admin user
    const adminUser: IUser = {
      name: 'Admin',
      email: 'admin@admin.com',
      password: '12345',
    };

    const checkUserExists = await this.usersRepository.findByEmail(
      adminUser.email,
    );

    if (checkUserExists) {
      throw new AppError('Email address already used');
    }

    const hashedPassword = await this.hashProvider.generateHash(
      adminUser.password,
    );

    await this.usersRepository.create({
      name: adminUser.name,
      email: adminUser.email,
      password: hashedPassword,
    });

    console.log('Admin user was created');

    return 'Setup executed';
  }
}

export default SetupService;
