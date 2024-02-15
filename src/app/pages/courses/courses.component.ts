import { Component } from '@angular/core';
import { CourseIntroductionComponent } from 'src/app/components/course-introduction/course-introduction.component';
import { CursorComponent } from 'src/app/ui/cursor/cursor.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseIntroductionComponent,CursorComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

}
