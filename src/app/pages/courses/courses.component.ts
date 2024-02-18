import { Component, OnInit } from '@angular/core';
import { CourseIntroductionComponent } from 'src/app/components/course-introduction/course-introduction.component';
import { CursorComponent } from 'src/app/ui/cursor/cursor.component';
import { CourseCatalogComponent } from 'src/app/components/course-catalog/course-catalog.component';

import { gsap } from 'gsap';
import SplitType from 'split-type';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseIntroductionComponent,CursorComponent,CourseCatalogComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit{
  ngOnInit(): void {
      this.courseTilteAnimation();
      this.courseParagraphAnimation();
  }

  private courseTilteAnimation():void{
    const courseTitle = new SplitType(".course_title");
    const charCourse = document.querySelectorAll('.course_title .char');

    gsap.from(charCourse,{
      opacity:0,
      stagger:0.4,
      y:40
    })
   
  }

  private courseParagraphAnimation():void{
    const courseP = new SplitType(".course_p");
    const charP = document.querySelectorAll('.course_p .char');

    gsap.from(charP,{
      opacity:0,
      duration:2,
      y:40
    })
   
  }
  
}
