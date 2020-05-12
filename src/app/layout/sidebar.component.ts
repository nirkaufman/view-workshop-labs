import { Component } from '@angular/core';

@Component({
  selector: 'tp-sidebar',
  template: `
      <div class="bg-light border-right" id="sidebar-wrapper">
          <div class="sidebar-heading">Teleportation</div>
          <div class="list-group list-group-flush">
              <a routerLink="home" class="list-group-item list-group-item-action bg-light">Home</a>
              <a routerLink="projects" class="list-group-item list-group-item-action bg-light">Projects</a>
              <a routerLink="profile" class="list-group-item list-group-item-action bg-light">Profile</a>
          </div>
      </div>
  `,
  styles: []
})
export class SidebarComponent  {


}
