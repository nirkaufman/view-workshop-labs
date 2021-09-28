import {Component} from '@angular/core';

@Component({
  selector: 'tp-home',
  template: `
      <h2 class="mt-3">
          The Playground
      </h2>
  `,
})
export class HomeComponent {

  home() {
    alert('Home Page')
  }
}
