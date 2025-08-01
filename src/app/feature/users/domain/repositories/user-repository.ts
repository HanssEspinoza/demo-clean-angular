import { HttpResourceRef } from '@angular/common/http';
import { User } from '../entities/user';

export abstract class UserRepository {
  abstract getAllUsers(): HttpResourceRef<User[]>;
}
