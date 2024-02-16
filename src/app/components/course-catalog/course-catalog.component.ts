import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Certificates } from 'src/app/models/projects.model';

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-catalog.component.html',
  styleUrl: './course-catalog.component.scss'
})
export class CourseCatalogComponent{
  
  certificates:Certificates[]=[
    {
      name:"index"
    },
    {
      name:"index"
    },
    {
      name:"index"
    },
    {
      name:"index"
    },
    {
      name:"index"
    },
    {
      name:"index"
    },
    {
      name:"index"
    },
    {
      name:"index"
    },
    {
      name:"index"
    },
    {
      name:"index"
    },
    {
      name:"index"
    },
    {
      name:"index"
    },
    {
      name:"index"
    },
    {
      name:"index"
    },
    {
      name:"index"
    },
  ]


  private updateCursorOutline(action: 'add' | 'remove', i: number): void {
    const firstImage = document.querySelector(".first_image");
    const secondImage = document.querySelector(".second_image");

    if (i === 4) {
      firstImage?.classList[action]('active');
      secondImage?.classList.remove('active');
    } else if (i === 7) {
      secondImage?.classList[action]('active');
      firstImage?.classList.remove('active');
    }
  }

  mouseEnter(i: number): void {
    if (i === 4 || i === 7) {
      this.updateCursorOutline('add', i);
    }
  }

  mouseLeave(i: number): void {
    console.log('leaved');
    
    if (i === 4 || i === 7) {
      this.updateCursorOutline('remove', i);
    }
  }
}
