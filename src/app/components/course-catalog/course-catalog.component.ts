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
      id:1,
      name:"",
      image:""
    },
    {
      id:2,
      name:"",
      image:""
    },
    {
      id:3,
      name:"Santander Bootcamp 2023 - Fullstack Java+Angular",
      image:"../../../assets/images/certificates-images/angularJava.png"
    },
    {
      id:4,
      name:"",
      image:""
    },
    {
      id:5,
      name:"Google Data Analytics (PT)",
      image:"../../../assets/images/certificates-images/dataAnalise.png"
    },
    {
      id:6,
      name:"Desenvolvimento Frontend com Angular",
      image:""
    },
    {
      id:7,
      name:"",
      image:""
    },
    {
      id:8,
      name:"EF SET Certifcate",
      image:""
    },
    {
      id:9,
      name:"index",
      image:""
    },
    {
      id:10,
      name:"",
      image:""
    },
    {
      id:11,
      name:"IA generativa com AWS Trybe + AWS",
      image:""
    },
    {
      id:12,
      name:"index",
      image:""
    },
    {
      id:13,
      name:"index",
      image:""
    },
    {
      id:14,
      name:"index",
      image:""
    },
    {
      id:15,
      name:"index",
      image:""
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
  certificateSelected:Certificates[] =[];
  certificateDetails!:string;

  openCertificate(id:number):void{
    this.certificateDetails ='enable';

    const certificateDetails = this.certificates.forEach(item => {
      if(item.id === id){
        this.certificateSelected.push(item); 
      }
    })
  }

  closeCertificate():void{
    this.certificateSelected =[];
    this.certificateDetails ='';
  }

}
