import { Component, OnInit } from '@angular/core';
import { CourseIntroductionComponent } from 'src/app/components/course-introduction/course-introduction.component';
import { CursorComponent } from 'src/app/ui/cursor/cursor.component';

import { gsap } from 'gsap';
import SplitType from 'split-type';
import { CourseCatalogComponent } from 'src/app/components/course-catalog/course-catalog.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseIntroductionComponent,CursorComponent,CourseCatalogComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit{
  ngOnInit(): void {
      this.courseTilte();
  }

  private courseTilte():void{
    const courseTitle = new SplitType(".course_title");
    const charCourse = document.querySelectorAll('.course_title .char');

    gsap.from(charCourse,{
      opacity:0,
      stagger:0.4,
      y:40
    })
   
  }
}
