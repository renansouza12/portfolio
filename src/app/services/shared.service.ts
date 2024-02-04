import { Injectable } from '@angular/core';
import { Projects } from '../models/projects.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
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
}
