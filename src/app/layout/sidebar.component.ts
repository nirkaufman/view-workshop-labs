import { Component } from '@angular/core';

@Component({
  selector: 'tp-sidebar',
  template: `
      <div class="bg-light border-right" id="sidebar-wrapper">
          <div class="sidebar-heading"><span>MASTERING</span><strong class="text-danger">ANGULAR</strong></div>
          <div class="list-group list-group-flush">
              <a routerLink="home" class="list-group-item list-group-item-action bg-light">The playground</a>
              <a routerLink="projects" class="list-group-item list-group-item-action bg-light">Sample Page</a>
              <a routerLink="profile" class="list-group-item list-group-item-action bg-light">Profile Page</a>
          </div>
      </div>
  `,
})
export class SidebarComponent  {


}
