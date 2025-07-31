import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { User } from '../domain/entities/user';

@Component({
  selector: 'app-user-card',
  template: `
    <article class="border p-4 rounded-xl shadow">
      <h3 class="font-bold text-lg">{{ user()?.name }}</h3>
      <p class="text-sm text-gray-500">* {{ user()?.username }}</p>
      <a class="text-blue-600" [href]="'mailto:' + user()?.email">{{
        user()?.email
      }}</a>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCard {
  public user = input<User | null>(null);
}
