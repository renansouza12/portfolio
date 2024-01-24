import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {

    //smoth scroll

    // const lenis = new Lenis()

    // lenis.on('scroll', (e:any) => {
    //   console.log(e)
    // })
    
    // lenis.on('scroll', ScrollTrigger.update)
    
    // gsap.ticker.add((time)=>{
    //   lenis.raf(time * 1000)
    // })
    
    // gsap.ticker.lagSmoothing(0)


    // gsap animations
      const amountScroll = (document.querySelector('h1') as HTMLElement)?.offsetWidth;

        gsap.to("h1", {
          xPercent: () => (amountScroll - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: ".start",
            pin: true,
            scrub: 1,
            end: "+=300%", 
      
          },
        });

        gsap.to('.introduction',{
          clipPath: "circle(80%)",
          ease:"circ.in",
          transition:0.4,
          scrollTrigger:{
            trigger:".start",
            start:"top center",
            end:"bottom center",
            scrub:1,
    
          }
        })
        gsap.from("header",{
          opacity:0,
          scrollTrigger:{
            trigger:".introduction_title_container",
            start:"bottom top",
            end:"bottom top",
            scrub:1,
          }
        })

        const myText = new SplitType('.introduction_title');
        const charIntroduction = document.querySelectorAll('.introduction_title .char');

        gsap.from(charIntroduction, {
          opacity: 0,
          yPercent: -600,
          stagger: 0.1,
          transition:0.8, 
          scrollTrigger: {
            trigger: ".introduction_title_container",
            start: "top center",
            end: "bottom center",
            scrub: 1,
       
          },
        });

        const myTextAbout = new SplitType('.about_text');
        const charAbout = document.querySelectorAll('.about_text .char');

        gsap.from(charAbout,{
            opacity:0,
            stagger:0.3,
            transition:0.5,
            scrollTrigger: {
              trigger: ".about",
              start: "top center",
              end: "center center",
              scrub: 1,
            },
        })
  }

}
