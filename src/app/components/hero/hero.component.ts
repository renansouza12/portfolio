import { CommonModule } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ShowcaseComponent } from '../showcase/showcase.component';
import { Projects } from 'src/app/models/projects.model';
import { SharedService } from 'src/app/services/shared.service';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule,ShowcaseComponent,CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss','hero.responsive.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() projectName!:string;
  @Input() firstImage!:string;

  projectSelected: Projects[] = []

  showDetails!: any;

  constructor(private route: ActivatedRoute, private shared: SharedService) {

    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.showDetails = this.shared.projectDetail.find(item => item.id === id);
      if (this.showDetails) {
        this.projectSelected.push(this.showDetails);
      }
    })
  }
  ngOnInit(): void {
    this.heroAnimation();
  }
  private heroAnimation():void{
    gsap.to('.hero',{
      backgroundColor:'#F1F1F1',
      scrollTrigger:{
        trigger:".hero",
        start:"20% top",
        end:"bottom center",
        scrub:1,
        markers:true
      }
    })
  }
}
