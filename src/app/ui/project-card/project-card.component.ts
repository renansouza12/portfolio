import { Component,Input, OnInit } from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent implements OnInit{
  @Input() id!:number;
  @Input() imageCoverCard!:string;

  ngOnInit(): void {
    //gsap animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects_catalog',
        start: "-40% top",
        end: "center center",
        scrub: true,
        markers:true
      }
    }).fromTo('.project_card', { transition:1,opacity: 0 ,yPercent:300}, { opacity: 1, stagger: 0.4 ,yPercent:0})
  }
}
