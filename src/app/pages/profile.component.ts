import {Component} from '@angular/core';

@Component({
  selector: 'tp-profile',
  template: `
      <h2 class="mt-3">
          Profile Page
      </h2>
      <button *nkAttachTo="'footer'" class="btn btn-primary" (click)="editProfile()">Edit Profile</button>
  `,
})
export class ProfileComponent {

  editProfile() {
    console.log('edit your profile!');

  }
}
