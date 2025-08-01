import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GetAllUsers } from '../application/get-all-users';

@Component({
  selector: 'app-users-page',
  imports: [RouterLink],
  template: `
    <button (click)="reset()">Reset</button>
    <button (click)="getUsers()">Reload</button>
    <ul>
      @for(user of userRs.value(); track user.id) {
      <li>
        <a routerLink="/users/{{ user.id }}">
          {{ user.name }}
        </a>
      </li>
      }
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersPage {
  private readonly getAllUsers = inject(GetAllUsers);

  userRs = this.getAllUsers.execute();

  reset() {
    this.userRs.set([]);
  }

  getUsers() {
    this.userRs.reload();
  }
}
