import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { GetAllUsers } from '../application/get-all-users';
import { User } from '../domain/entities/user';
import { UserCard } from './user-card';

@Component({
  selector: 'app-users-page',
  imports: [UserCard],
  template: `<section class="p-8">
    <h2 class="text-2xl font-bold mb-4">Users (Clean Architecture demo)</h2>

    @if (vm(); as state) { @if (state.loading()) {
    <p>Cargando usuarios...</p>
    } @if (state.error()) {
    <div class="text-red-600">Error: {{ state.error() }}</div>
    } @if (state.users().length) {
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      @for (u of state.users(); track u.id) {
      <app-user-card [user]="u" />
      }
    </div>
    } }
  </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPage {
  private readonly getAllUsers = inject(GetAllUsers);

  private readonly loading = signal<boolean>(true);
  private readonly users = signal<User[]>([]);
  private readonly error = signal<string | null>(null);

  vm = computed(() => ({
    loading: this.loading,
    users: this.users,
    error: this.error,
  }));

  constructor() {
    effect(() => {
      this.load();
    });
  }

  private async load() {
    try {
      this.loading.set(true);
      this.users.set(await this.getAllUsers.execute());
    } catch (error: any) {
      this.error.set(error.message || 'An error occurred');
    } finally {
      this.loading.set(false);
    }
  }
}
