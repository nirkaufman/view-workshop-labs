import {Component} from '@angular/core';

@Component({
  selector: 'tp-profile',
  template: `
      <h2 class="mt-3">
          Profile Page
      </h2>
      
      <button *nkAttachTo="'navbar'" (click)="profile()" class="btn btn-info">Profile Button</button>
      <p *nkAttachTo="'footer'">Text from profile</p>

  `,
})
export class ProfileComponent {

  profile() {
    alert('Profile Page')
  }
}
