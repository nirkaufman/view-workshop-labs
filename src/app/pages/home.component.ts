import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'tp-home',
  template: `
      <h2 class="mt-3">{{title}}</h2>
  `,
})
export class HomeComponent {
  title = 'Home Page'
}
