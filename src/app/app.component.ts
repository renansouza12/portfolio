import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
        const amountScroll = (document.querySelector('h1') as HTMLElement)?.offsetWidth;

        gsap.to("h1", {
          xPercent: () => (amountScroll - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: ".start",
            pin: true,
            scrub: 1,
            end: "+=600%", 
      
          },
        });
  }

}
