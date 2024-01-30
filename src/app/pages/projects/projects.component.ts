import { Component } from '@angular/core';
import { TitleComponent } from 'src/app/components/title/title.component';
import { CursorComponent } from 'src/app/ui/cursor/cursor.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CursorComponent,TitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
