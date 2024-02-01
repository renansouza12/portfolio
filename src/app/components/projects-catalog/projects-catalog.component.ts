import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Catalog } from 'src/app/models/projects.model';
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

  catalogProjects:Catalog[] = [
    {
      'id':1,
      image:'../../../assets/images/keytap-image.png'
    },
    {
      'id':2,
      image:'../../../assets/images/fuyu-image.png'
    },
    {
      'id':3,
      image:'../../../assets/images/cardDetails-image.png'
    },
    {
      'id':4,
      image:'../../../assets/images/quiz-image.png'
    },
    {
      'id':5,
      image:'../../../assets/images/aluraPortfolio-image.png'
    },
    {
      'id':6,
      image:'../../../assets/images/decoder-image.png'
    }
  ]
}
