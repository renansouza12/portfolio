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
export class CourseCatalogComponent {
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
  boxCard():void{
    console.log('clicked');
    
  }
}
