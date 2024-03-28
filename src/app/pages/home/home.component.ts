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
  
  // private animateAboutText(): void {
  //   const myTextAbout = new SplitType('#about_txt');
  //   const charAbout = document.querySelectorAll('#about_txt .char');

  //   gsap.from(charAbout, {
  //     opacity: 0,
  //     stagger:0.1,
  //     xPercent:-50,
  //     scrollTrigger: {
  //       trigger: '.about_content',
  //       start: 'top center',
  //       end: 'bottom center',
  //       scrub: 1,
  //     },
  //   });
  // }
  


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
      x:200,
      y:300,
      stagger:0.1,
      scrollTrigger: {
        trigger: '.tech_container',
        start: '-20% top',
        end: 'center center',
        scrub: 1,
      },
    });
  }

}
