import {Component} from '@angular/core';

@Component({
  selector: 'tp-profile',
  template: `
      <h2 class="mt-3">
          Profile Page
      </h2>
  `,
})
export class ProfileComponent {

  editProfile() {
    console.log('edit your profile!');

  }
}
