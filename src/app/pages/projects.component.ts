import { Component } from '@angular/core';

@Component({
  selector: 'tp-projects',
  template: `
      <h2 class="mt-3">
          Sample Page
      </h2>
  `
})
export class ProjectsComponent {
  projects() {
    alert('Projects page')
  }
}
