import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {


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


        gsap.from(".footer_img",{
          y:-50,
          scrollTrigger: {
            trigger: ".carousel",
            start: "top center",
            end: "center center",
            scrub: 1,
          },
        })
        
        gsap.from(".footer_content",{
          y:100,
          opacity:0,
          scrollTrigger: {
            trigger: "footer",
            start: "top center",
            end: "center center",
            scrub: 1,
  
          },
        })
  }

}
