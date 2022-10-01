import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'tp-home',
  template: `
      <h2 class="mt-3">{{title}}</h2>
      <button *nkAttachTo="'header'" class="btn btn-success" (click)="login()">Login</button>
  `,
})
export class HomeComponent {
  title = 'The Playground'

  changeTitle() {
    this.title = "Brand new title"
  }

  login() {
    console.log('HomeComponent login');
  }
}
