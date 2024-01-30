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
  catalogProjects:Catalog[] = [
    {
      'id':1,
      image:'https://i.ibb.co/C76VJ5F/keytap-capture.png'
    },
    {
      'id':2,
      image:'https://i.ibb.co/vD60Dsb/Capture.png'
    },
    {
      'id':3,
      image:'https://github.com/renansouza12/card-details-form/blob/main/src/assets/img/screenshot.png?raw=true'
    }
  ]
}
