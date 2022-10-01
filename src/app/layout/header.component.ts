import { Component } from '@angular/core';

@Component({
  selector: 'tp-navbar',
  template: `
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom d-flex justify-content-end">
          <span class="text-muted">
              <ng-container nkTarget="header"></ng-container>
          </span>
      </nav>
  `
})
export class HeaderComponent {

}
