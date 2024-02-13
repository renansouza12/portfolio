import { CommonModule } from '@angular/common';
import { Component, Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent{
  @Output() options = new EventEmitter<number>();
  @Input() message:boolean = false;
  
  firstButton!:string;
  secondButton!:string;
  thirdButton!:string;

  handleButtonClick(btnNumber:number):void{
    this.options.emit(btnNumber);
    if(btnNumber === 1){
      this.firstButton = 'newba';
      this.secondButton = '';
      this.thirdButton = '';
    }
    if(btnNumber === 2){
      this.firstButton = '';
      this.secondButton = 'inter';
      this.thirdButton = '';
    }
    if(btnNumber === 3){
      this.firstButton = '';
      this.secondButton = '';
      this.thirdButton = 'pro';
    }
  
  }
}
