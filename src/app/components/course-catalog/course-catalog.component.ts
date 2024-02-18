import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Certificates } from 'src/app/models/projects.model';

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-catalog.component.html',
  styleUrls: ['./course-catalog.component.scss','course-catalog.responsive.component.scss']
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
      name:"",
      image:""
    },
    {
      id:7,
      name:"Desenvolvimento Frontend com Angular",
      image:"../../../assets/images/certificates-images/angular.png"
    },
    {
      id:8,
      name:"EF SET Certifcate",
      image:"../../../assets/images/certificates-images/fullCertificateEF.png"
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
      image:"../../../assets/images/certificates-images/trybe.png"
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
    const certificateAngula = document.querySelector(".second_image");
    const certificateEF = document.querySelector(".third_image");
    const certificateData = document.querySelector(".fourth_image");
    const certificateTrybe = document.querySelector(".fifth_image");
    
    switch(i){
      case 2:
        certificateAngularJava?.classList[action]('active');
        break;
      case 6:
        certificateAngula?.classList[action]('active');
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

  openCertificate(id: number): void {
    this.certificateSelected = this.certificates.filter(item => item.id === id && item.name != "index");
    this.certificateDetails = 'enable';
  }

  closeCertificate(): void {
    this.certificateSelected = [];
    this.certificateDetails = '';
  }
  
}
