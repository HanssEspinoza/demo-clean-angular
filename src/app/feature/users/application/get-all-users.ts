import { HttpResourceRef } from '@angular/common/http';
import { inject } from '@angular/core';
import { User } from '../domain/entities/user';
import { UserRepository } from '../domain/repositories/user-repository';

export class GetAllUsers {
  private readonly repo = inject(UserRepository);

  execute(): HttpResourceRef<User[]> {
    return this.repo.getAllUsers();
  }
}
