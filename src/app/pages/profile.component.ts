import {Component} from '@angular/core';

@Component({
  selector: 'tp-profile',
  template: `
      <h2 class="mt-3">
          Profile Page
      </h2>

      <ng-template>
          <button (click)="profile()" class="btn btn-info">Profile Button</button>
      </ng-template>
  `,
})
export class ProfileComponent {

  profile() {
    alert('Profile Page')
  }
}
