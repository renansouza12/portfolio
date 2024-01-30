import { Component, OnInit } from '@angular/core';
import { TitleComponent } from 'src/app/components/title/title.component';
import { CursorComponent } from 'src/app/ui/cursor/cursor.component';


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CursorComponent,TitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{

  ngOnInit(): void {
    this.setupGsapAnimations();
  }
  private setupGsapAnimations():void{
    gsap.from('.title',{
      opacity:0,
      stagger:0.2,
      duration:2  
    })

    this.headerAnimation();

  }
  private headerAnimation():void{
    gsap.from('header', {
      opacity: 0,
      scrollTrigger: {
        trigger: 'header',
        start: '20% top',
        scrub: 1, 
      }
    });
  }
}
