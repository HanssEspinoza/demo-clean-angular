import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../domain/entities/user';
import { UserRepository } from '../domain/repositories/user-repository';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({ providedIn: 'root' })
export class UserApiService extends UserRepository {
  getAllUsersRs() {
    return httpResource<User[]>(
      () => ({
        url: API_URL,
        method: 'GET',
      }),
      { defaultValue: [] }
    );
  }

  override getAllUsers() {
    return this.getAllUsersRs();
  }
}
