import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  
    <footer class="footer">
      <div class="container content has-text-centered">
        <p>Developed by Brandon Carvalho using the <strong>MEAN</strong> stack</p>
      </div>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
