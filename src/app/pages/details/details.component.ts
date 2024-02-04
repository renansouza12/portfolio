import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from 'src/app/models/projects.model';
import { CursorComponent } from 'src/app/ui/cursor/cursor.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,
            CursorComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  projectDetail:Projects[] = [
    {
      'id':1,
      'name':"Keytap",
      'description':"description",
      images:{
        firstImage:"../../../assets/images/keytap-image.png",
        secondImage:"",
        thirdtImage:""
      }
    },
    {
      'id':2,
      'name':"",
      'description':"Fuyu",
      images:{
        firstImage:"../../../assets/images/fuyu-image.png",
        secondImage:"",
        thirdtImage:""
      }
    },
    {
      'id':3,
      'name':"Card Details",
      'description':"description",
      images:{
        firstImage:"../../../assets/images/cardDetails-image.png",
        secondImage:"",
        thirdtImage:""
      }
    },
    {
      'id':4,
      'name':"",
      'description':"Quiz",
      images:{
        firstImage:"../../../assets/images/quiz-image.png",
        secondImage:"",
        thirdtImage:""
      }
    },
    {
      'id':5,
      'name':"Decoder",
      'description':"description",
      images:{
        firstImage:"../../../assets/images/decoder-image.png",
        secondImage:"",
        thirdtImage:""
      }
    },
  ]

  projectSelected:Projects[] =[]

  showDetails!:any;

  constructor(private route:ActivatedRoute){

    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.showDetails = this.projectDetail.find(item => item.id === id);
      this.projectSelected.push(this.showDetails);
      
    })
  }

  
}
