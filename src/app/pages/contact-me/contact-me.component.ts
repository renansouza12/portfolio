import { Component, OnInit } from '@angular/core';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { CursorComponent } from 'src/app/ui/cursor/cursor.component';


import { gsap } from 'gsap';
import SplitType from 'split-type';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CursorComponent,ContactComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent implements OnInit{
  ngOnInit(): void {  
    this.thanksAnimation();
    this.authorAnimation();
  }
  private thanksAnimation():void{
    const myText = new SplitType('.thanks_p');
    const chartThanks = document.querySelectorAll('.thanks_p .char')

    gsap.from(chartThanks,{
      opacity:0,
      stagger:0.1,
    })
  }
  private authorAnimation():void{
    const myText = new SplitType('.copy');
    const chartCopy = document.querySelectorAll('.copy .char')

    gsap.from(chartCopy,{
      opacity:0,
      stagger:0.1,
    })
  }

}
