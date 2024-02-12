import { Injectable } from '@angular/core';
import { Projects } from '../models/projects.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  projectDetail:Projects[] = [
    {
      'id':1,
      'name':"Keytap",
      'description':"A straightforward website showcasing keyboards and keyboard keys, allowing users to effortlessly add items to the cart and adjust quantities as needed.",
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
      'description':"A captivating landing page dedicated to the Y-3 shoe, skillfully crafted with Angular and GreenSock animations, ensuring a seamless and visually dynamic experience across all devices with responsive design.",
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
      'description':"An interactive card details form where you can effortlessly modify the cardholder's name, card number, birthdate, and CVC for a personalized and secure input experience.",
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
      'description':"A dynamic 'Discover Personality Type' quiz consisting of five questions, each generating four options dynamically to provide a personalized and engaging experience for users.",
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
      'description':"An application for encrypting and decrypting texts, where the letter 'e' is converted to 'enter,' 'i' to 'imes,' 'a' to 'ai,' 'o' to 'ober,' and 'u' to 'ufat'.",
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
