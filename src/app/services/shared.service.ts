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
      'description':"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur eveniet a iusto ex voluptas aliquam autem sequi laborum facilis voluptatibus!",
      images:{
        firstImage:"../../../assets/images/keytap-image.png",
        secondImage:"../../../assets/images/keytap-image1.png",
        thirdImage:"../../../assets/images/keytap-image2.png"
      },
      website:'https://keytap.vercel.app/',
      repository:'https://github.com/renansouza12/keytap',
      techs:'Angular TypeScript Scss'
      
    },
    {
      'id':2,
      'name':"Fuyu",
      'description':"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur eveniet a iusto ex voluptas aliquam autem sequi laborum facilis voluptatibus!",
      images:{
        firstImage:"../../../assets/images/fuyu-image.png",
        secondImage:"../../../assets/images/fuyu-image1.avif",
        thirdImage:"../../../assets/images/fuyu-image2.avif"
      },
      website:'https://fuyu-landing-page.vercel.app/',
      repository:'https://github.com/renansouza12/FUYU-landing-page',
      techs:'Angular TypeScript Scss'
    },
    {
      'id':3,
      'name':"Card Details",
      'description':"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur eveniet a iusto ex voluptas aliquam autem sequi laborum facilis voluptatibus!",
      images:{
        firstImage:"../../../assets/images/cardDetails-image.png",
        secondImage:"../../../assets/images/cardDetails-image1.avif",
        thirdImage:"../../../assets/images/cardDetails-image2.avif"
      },
      website:'https://gregarious-crumble-17bc55.netlify.app/',
      repository:'https://github.com/renansouza12/card-details-form',
      techs:'Angular TypeScript Scss'
    },
    {
      'id':4,
      'name':"Quiz",
      'description':"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur eveniet a iusto ex voluptas aliquam autem sequi laborum facilis voluptatibus!",
      images:{
        firstImage:"../../../assets/images/quiz-image.png",
        secondImage:"../../../assets/images/quiz-image1.avif",
        thirdImage:"../../../assets/images/quiz-image2.avif"
      },
      website:'https://quiz-pink-delta.vercel.app/',
      repository:'https://github.com/renansouza12/quiz',
      techs:'Angular TypeScript Scss'
    },
    {
      'id':5,
      'name':"Decoder",
      'description':"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur eveniet a iusto ex voluptas aliquam autem sequi laborum facilis voluptatibus!",
      images:{
        firstImage:"../../../assets/images/decoder-image.png",
        secondImage:"../../../assets/images/decoder-image1.avif",
        thirdImage:"../../../assets/images/decoder-image2.avif"
      },
      website:'https://renansouza12.github.io/alura-portfolio-desafio/',
      repository:'https://github.com/renansouza12/alura-portfolio-desafio',
      techs:'Html css javascript'
    },
  ]
}
