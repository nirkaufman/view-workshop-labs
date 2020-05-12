import {Component} from '@angular/core';

@Component({
  selector: 'tp-projects',
  template: `
      <h2 class="mt-3">
          Projects Page
      </h2>

      <ng-template>
          <button (click)="projects()" class="btn btn-danger">Projects Button</button>
      </ng-template>
  `
})
export class ProjectsComponent {
  projects() {
    alert('Projects page')
  }
}
