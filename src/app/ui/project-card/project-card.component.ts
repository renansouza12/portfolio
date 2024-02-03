import { Component, Input, OnInit } from '@angular/core';

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
export class ProjectCardComponent implements OnInit {
  @Input() id!: number;
  @Input() imageCoverCard!: string;

  ngOnInit(): void {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.project_card',
        start:'-20% center',
        end:'bottom center',
        scrub:true
      }
    })

    tl.from('.project_card',{
      opacity:0,
      y:400
      
    })
    tl.to('.project_card',{
      stagger:0.2,
      duration:.5,
      opacity:1,
      y:-70
    })

  }
}
