import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar.component';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { HomeComponent } from './pages/home.component';
import { ProfileComponent } from './pages/profile.component';
import { ProjectsComponent } from './pages/projects.component';
import { WindowDirective } from './directives/window.directive';
import { TargetDirective } from './directives/target.directive';
import { AttachToDirective } from './directives/attach-to.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    ProjectsComponent,
    WindowDirective,
    TargetDirective,
    AttachToDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
