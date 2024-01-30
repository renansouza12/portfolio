import { Component, OnInit } from '@angular/core';
import { TitleComponent } from 'src/app/components/title/title.component';
import { CursorComponent } from 'src/app/ui/cursor/cursor.component';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectsCatalogComponent } from 'src/app/components/projects-catalog/projects-catalog.component';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CursorComponent,
            TitleComponent,
            ProjectsCatalogComponent,
          ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{

  ngOnInit(): void {
    this.setupGsapAnimations();
  }
  private setupGsapAnimations():void{
    gsap.to('.title',{
      opacity:0,
      stagger:0.2,
      duration:2  ,
      scrollTrigger:{
        trigger:'.title_container',
        start:'0% top',
        end:'bottom center',
        scrub:1,
        markers:true
      }
    })

    this.headerAnimation();
  }
  private headerAnimation():void{
    gsap.from('header', {
      opacity: 0,
    });
  }

}
