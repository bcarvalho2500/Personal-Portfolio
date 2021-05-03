import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

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
        <form #emailForm="ngForm" (ngSubmit)="submitForm(emailForm)">
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

          <button type="submit" class="button is-info" id="sendButton">Send!</button>

          <div class="container field">
            <p class="is-size-7 mt-3">Email is sent using <a href="https://postmail.invotes.com">Postmail</a></p>
          </div>
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
  
  form_id_js: String = "javascript_form";
    
  data_js = {
    "access_token": "382k9i02fi8s729kbjlhyjt1"
  };

  constructor() { }

  ngOnInit(): void {
    
  }

  submitForm(emailForm : NgForm){

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        alert("Message Sent!")
      } else
      if(request.readyState == 4) {
        alert("Message Failed to Send")
      }
    };

    // Message template
    this.data_js['subject'] = "Email from Contact Me Form";
    var text = this.message + "\n" + this.email + "\n\nFrom,\n" + this.name;
    this.data_js['text'] = text;

    var params = this.toParams(this.data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);
    
    emailForm.reset();
    
    return false;
    
  }

  toParams(data_js) {
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
  } 
}
