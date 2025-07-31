import { Injectable, signal } from '@angular/core';
import { User } from '../domain/entities/user';
import { UserRepository } from '../domain/repositories/user-repository';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({ providedIn: 'root' })
export class UserApiService implements UserRepository {
  private readonly cache = signal<User[]>([]);

  async getAllUsers(): Promise<User[]> {
    if (this.cache().length) return this.cache();

    const response = await fetch(API_URL);
    const users = (await response.json()) as User[];
    this.cache.set(users);
    return users;
  }
}
