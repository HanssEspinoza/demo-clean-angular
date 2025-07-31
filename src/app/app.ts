import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersPage } from './feature/users/presentation/users-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UsersPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'demo-clean-angular';
}
