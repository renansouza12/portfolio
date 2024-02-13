import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/models/projects.model';
import { SharedService } from 'src/app/services/shared.service';
import { ProjectCardComponent } from 'src/app/ui/project-card/project-card.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-projects-catalog',
  standalone: true,
  imports: [ProjectCardComponent,CommonModule,FilterComponent],
  templateUrl: './projects-catalog.component.html',
  styleUrl: './projects-catalog.component.scss'
})
export class ProjectsCatalogComponent {
  catalogProjects:Projects[]= [];
  showMessage:boolean = false;

  gitHubLink(){
    window.location.href='https://github.com/renansouza12'; 
  }

  constructor(private router:Router,private shared:SharedService){
    this.shared.projectDetail.map(item => this.catalogProjects.push(item));
  }

  moreDetail(id:number){
    this.router.navigate(['/Details',id])  
  }
  filterOption(option: number): void {
    let filteredProjects = [...this.shared.projectDetail];
    this.showMessage = false;
    if(option === 1){
      filteredProjects = filteredProjects.filter((item) => item.level === 'Newba');
    }
    if(option === 2){
      filteredProjects = filteredProjects.filter((item) => item.level === 'Intermediary');
    }
    if(option === 3){
      filteredProjects = [];
      this.showMessage = true;
    }
    this.catalogProjects = filteredProjects;
  }
}
