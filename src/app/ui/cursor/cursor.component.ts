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


    function cursorHoverEffect(tag:any,action:any, className:any){
      tag.addEventListener(action, () => {
        dot?.classList.toggle(className);
        follower?.classList.toggle(className);
      });
    }
  }
  @HostListener('document:mousemove',['$event'])
  onMouseMove(event:MouseEvent){
    gsap.to('.cursor_outline',0.5,{x:event.clientX, y:event.clientY});
    gsap.to('.cursor_dot',0.1,{x:event.clientX, y:event.clientY});
  }

 
}
