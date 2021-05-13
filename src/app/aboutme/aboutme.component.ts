import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  template: `

    
    <section class="hero is-info">
      <div class="hero-body">
        <p class="title">
          About Me
        </p>
        <p class="subtitle">
          A little about my time at UMass Dartmouth and interests
        </p>
      </div>
    </section> 

    <section class="section">
      <div class="columns is-centered is-vcentered">
        <div class="column is-narrow">
          <img id="profilePhoto" src="./assets/profilePhoto.jpg">
        </div>
        <div class="column">
          <div class="content">
            <p class="block">
              I am a Computer Science student currently attending University of Massachusetts - Dartmouth.
              At UMass Dartmouth I am enrolled in an accelerated BS/MS program where I will graduate in 2022 with
              my bachelor's degree and in 2023 with my master's degree.
            </p>
            <p class="block">
              While at UMass Dartmouth I began mentoring CIS 190 - Introduction to Procedural Programming.
              I began mentoring when UMass Dartmouth began online classes due to COVID-19. Here I assisted the
              professor with adapting their class to an online environment and came up with different way to take
              assessments as well as mentor during lab sessions.
            </p>
            <p class="block">
              My current interest is Web Development, as can be seen with this site. This site's intended purpose is to
              not only serve as my personal porfolio but act as a platform for me to be able to learn more about Web Development.
              For this site I am learning the MEAN stack and using CSS frameworks (for this site, it's <a href="https://bulma.io">Bulma</a>).
              Currently I am focused on creating an appealing front-end. Once I am done with that I hope to expand the site so that
              I am able to learn back-end programming, such as using MongoDB and Express.
            </p>
          </div>
        </div>
      </div>
    </section>
    
  `,
  styles: [`
    
    #profilePhoto{
      height: 25em;
    }
  `]
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
