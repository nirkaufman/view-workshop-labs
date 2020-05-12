import {Component} from '@angular/core';
import {PortalService} from "../portal/portal.service";

@Component({
  selector: 'tp-navbar',
  template: `
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom d-flex justify-content-end">
          <form class="form-inline">
              <ng-container nkTarget="navbar"></ng-container>
          </form>
      </nav>
      
  `
})
export class HeaderComponent {

}
