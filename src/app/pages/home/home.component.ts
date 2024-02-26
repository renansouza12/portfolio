import { Component, OnInit } from '@angular/core';
import {IntroductionComponent} from 'src/app/components/introduction/introduction.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { StartComponent } from 'src/app/components/start/start.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { CursorComponent } from 'src/app/ui/cursor/cursor.component';


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';


gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
            HeaderComponent,
            StartComponent,
            IntroductionComponent,
            AboutComponent,
            FooterComponent,
            CursorComponent
          ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    this.setupGsapAnimations();
  }

  private setupGsapAnimations(): void {
    const amountScroll = (document.querySelector('h1') as HTMLElement)?.offsetWidth;

    gsap.to('h1', {
      xPercent: () => (amountScroll - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: '.start',
        pin: true,
        scrub: 1,
        end: '+=300%',
      },
    });

    this.animateIntroduction();
    this.animateIntroductionTitle();
    this.animateAboutText();
    this.animateAgeText();
    this.animateTech();
  }

  private animateIntroduction(): void {
    gsap.to('.introduction', {
      clipPath: 'circle(80%)',
      ease: 'circ.in',
      scrollTrigger: {
        trigger: '.start',  
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      }
    });
  }


  private animateIntroductionTitle(): void {
    const myText = new SplitType('.introduction_title');
    const charIntroduction = document.querySelectorAll('.introduction_title .char');

    gsap.from(charIntroduction, {
      opacity: 0,
      yPercent: -600,
      xPercent:-500,
      stagger:0.1,
      transition: 0.8,
      scrollTrigger: {
        trigger: '.introduction_title_container',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });
  }
  // this 
  private animateAboutText(): void {
    const myTextAbout = new SplitType('.about_text');
    const charAbout = document.querySelectorAll('.about_text .char');

    const myTextAboutP = new SplitType('.about_p');
    const charAboutP = document.querySelectorAll('.about_p .char');

    gsap.from(charAbout, {
      x:-50,
      opacity: 0,
      stagger: 0.1,
      transition: 0.5,
      scrollTrigger: {
        trigger: '.about_text',
        start: '-20% center',
        end: 'bottom center',
        scrub: 1,
      },
    });
    gsap.from(charAboutP, {
      opacity: 0,
      stagger: 0.3,
      x:-20,
      transition: 0.5,
      scrollTrigger: {
        trigger: '.who',
        start: '-20% center',
        end: 'bottom center',
        scrub: 1,
      },
    });
  }

  private animateAgeText(): void {

    const myTextAge = new SplitType('.age_text');
    const charAge = document.querySelectorAll('.age_text .char');

    const age_p = new SplitType('.age_p');
    const charAgeP = document.querySelectorAll('.age_p .char');

    gsap.from(charAge, {
      x:-50,
      opacity: 0,
      stagger: 0.1,
      transition: 0.5,
      scrollTrigger: {
        trigger: '.age',
        start: '-20% center',
        end: 'bottom center',
        scrub: 1,
      },
    });
    gsap.from(charAgeP, {
      x:-20,
      opacity: 0,
      stagger: 0.3,
      transition: 0.5,
      scrollTrigger: {
        trigger: '.age',
        start: '-20% center',
        end: 'bottom center',
        scrub: 1,
      },
    });
  }

  private animateTech(): void {
    const myTextTech = new SplitType('.tech_title');
    const charTech = document.querySelectorAll('.tech_title .char');

    gsap.from(charTech, {
      opacity: 0,
      stagger: 0.3,
      transition: 0.5,
      scrollTrigger: {
        trigger: '.tech_title',
        start: '-20% center',
        end: 'bottom center',
        scrub: 1,
      },
    });


    gsap.to('.tech_title', {
      x:-200,
      y:-200,
      transition: 0.5,
      scrollTrigger: {
        trigger: '.tech_container',
        start: '-20% center',
        end: 'bottom center',
        scrub: 1,
    
      },
    });
    gsap.from('.tech', {
      x:-200,
      y:-200,
      stagger:0.1,
      transition: 0.5,
      scrollTrigger: {
        trigger: '.tech_container',
        start: '-20% center',
        end: 'center center',
        scrub: 1,
      },
    });
  }

}
