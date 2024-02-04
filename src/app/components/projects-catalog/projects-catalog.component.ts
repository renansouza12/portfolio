import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/models/projects.model';
import { SharedService } from 'src/app/services/shared.service';
import { ProjectCardComponent } from 'src/app/ui/project-card/project-card.component';

@Component({
  selector: 'app-projects-catalog',
  standalone: true,
  imports: [ProjectCardComponent,CommonModule],
  templateUrl: './projects-catalog.component.html',
  styleUrl: './projects-catalog.component.scss'
})
export class ProjectsCatalogComponent {
  gitHubLink(){
    window.location.href='https://github.com/renansouza12'; 
  }

  catalogProjects:Projects[]= [];

  constructor(private router:Router,private shared:SharedService){
    this.shared.projectDetail.map(item => this.catalogProjects.push(item));
  }


  moreDetail(id:number){
    this.router.navigate(['/Details',id])
    
  }
}
