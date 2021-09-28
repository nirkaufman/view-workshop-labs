import {Component} from '@angular/core';

@Component({
  selector: 'tp-navbar',
  template: `
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom d-flex justify-content-end">
          <form class="form-inline">
              <span class="text-muted">
                  <a href="https://nir.life/" target="_blank">keep in touch</a>
              </span>
          </form>
      </nav>
  `
})
export class HeaderComponent {

}
