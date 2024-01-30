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
      image:'https://i.pinimg.com/originals/65/83/34/6583341566cc8d8652c3e42f74feebb6.gif'
    },
    {
      'id':2,
      image:'https://i.pinimg.com/originals/19/c9/e3/19c9e3184c7783ab99fd11af529711c5.gif'
    },
    {
      'id':3,
      image:'https://i.pinimg.com/originals/c7/07/d8/c707d856df4f96b0c1d2d1d1bf2e86ee.gif'
    }
  ]
}
