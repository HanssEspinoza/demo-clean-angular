import { inject } from '@angular/core';
import { User } from '../domain/entities/user';
import { UserRepository } from '../domain/repositories/user-repository';

export class GetAllUsers {
  private readonly repo = inject(UserRepository);

  execute(): Promise<User[]> {
    return this.repo.getAllUsers();
  }
}
