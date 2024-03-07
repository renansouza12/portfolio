import { NgOptimizedImage } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [RouterModule,NgOptimizedImage],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss','showcase.responsive.component.scss']
})
export class ShowcaseComponent implements OnInit {
  @Input() description!:string;
  @Input() demoLink!:string;
  @Input() repository!:string;
  @Input() techs!:string;
  @Input() secondImage!:string;
  @Input() thirdImage!:string;

  ngOnInit(): void {
   this.showCaseImageAnimation();
  }

  private showCaseImageAnimation():void{
    gsap.from('.second_image',{
      yPercent:70,
      scrollTrigger:{
        trigger:".showcase",
        start:"-20% center",
        end:"center center",
        scrub:1,
      }
    })
    gsap.from('.text_description',{
      yPercent:-50,
      scrollTrigger:{
        trigger:".showcase",
        start:"-20% top",
        end:"center center",
        scrub:1,

      }
    })
    gsap.from('.third_image',{
      yPercent:30,
      scrollTrigger:{
        trigger:".showcase",
        start:"center botom",
        end:"bottom bottom",
        scrub:1,
       
      }
    })
    gsap.from('.text_techs',{
      yPercent:-50,
      scrollTrigger:{
        trigger:".showcase",
        start:"center botom",
        end:"bottom bottom",
        scrub:1,
      }
    })
  } 
}
