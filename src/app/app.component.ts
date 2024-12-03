import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AnimatedObjectComponent } from './animated-object/animated-object.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>
    <app-about></app-about>
    <app-projects></app-projects>
    <app-certifications></app-certifications>
    <app-animated-object></app-animated-object> <!-- Add the animated object section -->
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    CertificationsComponent,
    ContactComponent,
    FooterComponent,
    AnimatedObjectComponent 
  ]
})
export class AppComponent {}
