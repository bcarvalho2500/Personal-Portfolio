import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <!-- header -->
    <app-header></app-header> 
    
    <!-- App Routing -->
    <router-outlet></router-outlet>

    <!-- Footer -->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'Personal-Portfolio';
}
