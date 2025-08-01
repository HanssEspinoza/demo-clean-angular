import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserDetailPage {
  public idUser = input.required<number>();
}
