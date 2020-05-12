import {Component} from '@angular/core';

@Component({
  selector: 'tp-home',
  template: `
      <h2 class="mt-3">
          Home Page
      </h2>
      
      <ng-template>
          <button (click)="home()" class="btn btn-primary">Home Button</button>
      </ng-template>
      
  `,
})
export class HomeComponent {
  home() {
    alert('Home Page')
  }
}
