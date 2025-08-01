import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GetAllUsers } from '../application/get-all-users';

@Component({
  selector: 'app-users-page',
  imports: [],
  template: `
    <button (click)="reset()">Reset</button>
    <button (click)="getUsers()">Reload</button>
    <ul>
      @for(user of userRs.value(); track user.id) {
      <li>{{ user.name }}</li>
      }
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPage {
  private readonly getAllUsers = inject(GetAllUsers);

  userRs = this.getAllUsers.execute();

  reset() {
    this.userRs.set([]);
  }

  getUsers() {
    this.userRs.reload();
  }
}
