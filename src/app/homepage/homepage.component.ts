import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
    
    <section class="hero is-link is-gradient is-fullheight-with-navbar">
      <div class="hero-body">
        <p class="title">
          Welcome to my site!
        </p>
      </div>  
    </section>
  `,
  styles: [
  ]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
