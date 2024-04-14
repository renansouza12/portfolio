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
      'description':"A straightforward website showcasing keyboards and keyboard keys, allowing users to effortlessly add items to the cart and adjust quantities as needed.",
      images:{
        coverImage:"../../../assets/images/keytap-images/keytapCover-image.png",
        firstImage:"../../../assets/images/keytap-images/keytap-image1.png",
        secondImage:"../../../assets/images/keytap-images/keytap-image2.png",
        thirdImage:"../../../assets/images/keytap-images/keytap-image3.png"
      },
      website:'https://keytap.vercel.app/',
      repository:'https://github.com/renansouza12/keytap',
      techs:'Angular TypeScript Scss',
      level:'Intermediary'
    },
    {
      'id':2,
      'name':"Fuyu",
      'description':"A captivating landing page dedicated to the Y-3 shoe, skillfully crafted with Angular and GreenSock animations, ensuring a seamless and visually dynamic experience across all devices with responsive design.",
      images:{
        coverImage:"../../../assets/images/fuyu-images/fuyuCover-image.png",
        firstImage:"../../../assets/images/fuyu-images/fuyu-image1.png",
        secondImage:"../../../assets/images/fuyu-images/fuyu-image2.png",
        thirdImage:"../../../assets/images/fuyu-images/fuyu-image3.png"
      },
      website:'https://fuyu-landing-page.vercel.app/',
      repository:'https://github.com/renansouza12/FUYU-landing-page',
      techs:'Angular TypeScript Scss',
      level:'Newba'
    },
    {
      'id':3,
      'name':"Card Details",
      'description':"An interactive card details form where you can effortlessly modify the cardholder's name, card number, birthdate, and CVC for a personalized and secure input experience.",
      images:{
        coverImage:"../../../assets/images/card-details-images/cardDetailsCover-image.png",
        firstImage:"../../../assets/images/card-details-images/cardDetails-image1.png",
        secondImage:"../../../assets/images/card-details-images/cardDetails-image2.png",
        thirdImage:"../../../assets/images/card-details-images/cardDetails-image3.png"
      },
      website:'https://gregarious-crumble-17bc55.netlify.app/',
      repository:'https://github.com/renansouza12/card-details-form',
      techs:'Angular TypeScript Scss',
      level:'Intermediary'
    },
    {
      'id':4,
      'name':"Quiz",
      'description':"A dynamic 'Discover Personality Type' quiz consisting of five questions, each generating four options dynamically to provide a personalized and engaging experience for users.",
      images:{
        coverImage:"../../../assets/images/quiz-images/quizCover-image.png",
        firstImage:"../../../assets/images/quiz-images/quiz-image.png",
        secondImage:"../../../assets/images/quiz-images/quiz-image1.avif",
        thirdImage:"../../../assets/images/quiz-images/quiz-image2.avif"
      },
      website:'https://quiz-pink-delta.vercel.app/',
      repository:'https://github.com/renansouza12/quiz',
      techs:'Angular TypeScript Scss',
      level:'Newba'
    },
    {
      'id':5,
      'name':"Decoder",
      'description':"An application for encrypting and decrypting texts, where the letter 'e' is converted to 'enter,' 'i' to 'imes,' 'a' to 'ai,' 'o' to 'ober,' and 'u' to 'ufat'.",
      images:{
        coverImage:"../../../assets/images/decoder-images/decoderCover-image.png",
        firstImage:"../../../assets/images/decoder-images/decoder-image.png",
        secondImage:"../../../assets/images/decoder-images/decoder-image1.avif",
        thirdImage:"../../../assets/images/decoder-images/decoder-image2.avif"
      },
      website:'https://decoder-alura-desafio.vercel.app/',
      repository:'https://github.com/renansouza12/decoder-alura-desafio',
      techs:'Html scss javascript',
      level:'Newba'
    },
    {
      'id':6,
      'name':"Alura Card Profile",
      'description':"A simple card using alura's API and displaying information about my profile on Alura's website, such as my ID, completed courses, and total steps.",
      images:{
        coverImage:"../../../assets/images/alura-card-images/alura-cardCover-image.png",
        firstImage:"../../../assets/images/alura-card-images/alura-card.png",
        secondImage:"../../../assets/images/alura-card-images/alura-card1.png",
        thirdImage:"../../../assets/images/alura-card-images/alura-card2.png"
      },
      website:'https://alura-card-profile.netlify.app/',
      repository:'https://github.com/renansouza12/alura-card-profile/tree/main?tab=readme-ov-file',
      techs:'Html scss javascript',
      level:'Newba'
    },
    {
      'id':7,
      'name':"Gallery",
      'description':"Explore a sleek front-end project featuring Unsplash API integration. Browse a curated collection of high-quality images, each with details like publication date and author. Use the search bar to find precisely what you need.",
      images:{
        coverImage:"../../../assets/images/gallery-images/gallery-image.png",
        firstImage:"../../../assets/images/gallery-images/gallery-image.png",
        secondImage:"../../../assets/images/gallery-images/gallery-image1.png",
        thirdImage:"../../../assets/images/gallery-images/gallery-image2.png"
      },
      website:'https://gallery-one-drab.vercel.app/',
      repository:'https://github.com/renansouza12/Gallery',
      techs:'Angular TypeScript Scss',
      level:'Intermediary'
    },
  ]
}
