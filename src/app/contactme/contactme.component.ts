import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactme',
  template: `
    
    <section class="hero is-info">
      <div class="hero-body">
        <p class="title">
          Contact Me!
        </p>
        <p class="subtitle">
          Use this as a way to send me comments on my site or to ask me a question!
        </p>
      </div>
    </section> 

    <section class="section">
      <div class="container">
        <form (ngSubmit)="submitForm()">
          <!-- Name Input -->
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" name="name" placeholder="Name" [(ngModel)]="name">
            </div>
          </div>

          <!-- Email Input -->
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" name="email" placeholder="Email Address" [(ngModel)]="email">
            </div>
          </div>

          <!-- Message Input -->
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" name="message" [(ngModel)]="message"></textarea>
            </div>
          </div>

          <button type="submit" class="button is-info">Send!</button>

        </form>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class ContactmeComponent implements OnInit {

  name : String;
  email : String;
  message : String;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    
    const reply = `\n${this.name},\nThank you for using my contact me page!`
    alert(reply) 
    
  }
}
