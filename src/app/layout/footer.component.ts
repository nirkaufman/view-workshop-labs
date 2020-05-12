import {Component} from '@angular/core';

@Component({
  selector: 'tp-footer',
  template: `
      <footer id="footer" class="footer mt-auto py-3">
          <div class="container">
              <span class="text-muted">
                  <ng-container nkTarget="footer"></ng-container>
              </span>
          </div>
      </footer>
  `,
})
export class FooterComponent {
}
