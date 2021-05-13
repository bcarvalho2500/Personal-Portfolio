import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  template: `
    
    <div class="container">
      <pdf-viewer [src]="pdfSource"
                  [original-size]="false"
      ></pdf-viewer>
    </div>

    <section class="section">
      <div class="container">
        <p class="content">If you would like to download my resume, click <a href="./assets/Resume - Brandon Carvalho.pdf" download>here</a>.</p>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class ResumeComponent implements OnInit {

  pdfSource = "./assets/Resume - Brandon Carvalho.pdf"
  constructor() { }

  ngOnInit(): void {
  }

}
