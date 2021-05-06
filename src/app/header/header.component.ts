import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `

    <nav class="navbar is-dark" role="navigation">
      <!-- Logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="../assets/LogoFinal.png">
        </a>
        <a (click)="toggleNavbar()" [ngClass]="{'is-active' : hamClick}" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenuItems">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenuItems" class="navbar-menu" [ngClass]="{'is-active': hamClick}">
        <div class="navbar-start">
          <a class="navbar-item" [routerLink]="['/']">Home</a>
          <a class="navbar-item" [routerLink]="['/contact']">Contact Me</a>
        </div>
      </div>
    </nav>
    
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  hamClick: boolean
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(){
    this.hamClick = !this.hamClick;
  }
}
