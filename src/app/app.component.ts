import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="d-flex">
          <tp-sidebar></tp-sidebar>

          <div class="page-content-wrapper">
              <tp-navbar></tp-navbar>

              <div class="container-fluid">
                  <router-outlet></router-outlet>
              </div>

          </div>

          <tp-footer></tp-footer>
      </div>     
  `,
})
export class AppComponent {

}
