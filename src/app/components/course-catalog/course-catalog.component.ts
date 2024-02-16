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
      name:"Santander Bootcamp 2023 - Fullstack Java+Angular"
    },
    {
      name:""
    },
    {
      name:""
    },
    {
      name:""
    },
    {
      name:"Google Data Analytics (PT)"
    },
    {
      name:"Desenvolvimento Frontend com Angular"
    },
    {
      name:""
    },
    {
      name:"EF SET Certifcate"
    },
    {
      name:"index"
    },
    {
      name:""
    },
    {
      name:"IA generativa com AWS Trybe + AWS"
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

    const certificateAngularJava = document.querySelector(".first_image");
    const certificaeAngula = document.querySelector(".second_image");
    const certificateEF = document.querySelector(".third_image");
    const certificateData = document.querySelector(".fourth_image");
    const certificateTrybe = document.querySelector(".fifth_image");
    
    switch(i){
      case 2:
        certificateAngularJava?.classList[action]('active');
        break;
      case 6:
        certificaeAngula?.classList[action]('active');
        break;
      case 7:
        certificateEF?.classList[action]('active');
        break;
        case 4:
          certificateData?.classList[action]('active');
          break;
          case 10:
            certificateTrybe?.classList[action]('active');
          break;
        default:
        break;

    }
  
  }

  mouseEnter(i: number): void {
    if (i === 2 || i === 4 || i === 6|| i === 7 || i === 10) {
      this.updateCursorOutline('add', i);
    }
  }

  mouseLeave(i: number): void {
    if (i === 2 || i === 4 || i === 6|| i === 7 || i === 10) {
      this.updateCursorOutline('remove', i);
    }
  }
}
