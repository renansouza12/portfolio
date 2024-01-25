import { Component,HostListener, OnInit } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [],
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.scss'
})
export class CursorComponent implements OnInit{

  ngOnInit(): void {
    const follower = document.querySelector(".cursor_outline");
    const dot = document.querySelector(".cursor_dot");

    gsap.set(dot,{xPercent:-50,yPercent:-50});
    gsap.set(follower,{xPercent:-50,yPercent:-50});


    const h1Titles = document.querySelectorAll("h1");
    h1Titles.forEach(title => cursorHoverEffect(title,'mouseenter','hghtlightH1'));
    h1Titles.forEach(title => cursorHoverEffect(title,'mouseleave','hghtlightH1'));

    const h2Subtitles = document.querySelectorAll("h2");
    h2Subtitles.forEach(subTitle => cursorHoverEffect(subTitle,'mouseenter','hghtlightH2'));
    h2Subtitles.forEach(subTitle => cursorHoverEffect(subTitle,'mouseleave','hghtlightH2'));

    const images = document.querySelectorAll('img');
    images.forEach(image => cursorHoverEffect(image,'mouseenter','hghtlightImage'));
    images.forEach(image => cursorHoverEffect(image,'mouseleave','hghtlightImage'));

    function cursorHoverEffect(tag:any,action:any, className:any){
      tag.addEventListener(action, () => {
        dot?.classList.toggle(className);
        follower?.classList.toggle(className);
      });
    }
  }
  @HostListener('document:mousemove',['$event'])
  onMouseMove(event:MouseEvent){
    gsap.to('.cursor_outline',0.3,{x:event.clientX, y:event.clientY});
    gsap.to('.cursor_dot',0.1,{x:event.clientX, y:event.clientY});
  }

 
}
