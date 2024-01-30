import { Component } from '@angular/core';
import { ProjectCardComponent } from 'src/app/ui/project-card/project-card.component';

@Component({
  selector: 'app-projects-catalog',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects-catalog.component.html',
  styleUrl: './projects-catalog.component.scss'
})
export class ProjectsCatalogComponent {

}
