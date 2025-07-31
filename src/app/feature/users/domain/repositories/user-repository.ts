import { User } from '../entities/user';

export abstract class UserRepository {
  abstract getAllUsers(): Promise<User[]>;
}
