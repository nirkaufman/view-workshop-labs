import {Component} from '@angular/core';

@Component({
  selector: 'tp-footer',
  template: `
      <footer id="footer" class="footer mt-auto py-3">
          <div class="container">
              <span class="text-muted">
                  <small>Nir Kaufman © 2020 | <a href="https://nir.life/" target="_blank" class="text-muted">nir.life</a></small>  
              </span>
          </div>
      </footer>
  `,
})
export class FooterComponent {
}
