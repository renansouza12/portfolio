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
  
  allButton!:string;
  firstButton!:string;
  secondButton!:string;
  thirdButton!:string;

  handleButtonClick(btnNumber:number):void{
    this.options.emit(btnNumber);
    this.allButton = 'all';
    if(btnNumber === 0){
      this.allButton = 'all';
      this.firstButton = '';
      this.secondButton = '';
      this.thirdButton = '';
    }
    if(btnNumber === 1){
      this.allButton = '';
      this.firstButton = 'newba';
      this.secondButton = '';
      this.thirdButton = '';
    }
    if(btnNumber === 2){
      this.allButton = '';
      this.firstButton = '';
      this.secondButton = 'inter';
      this.thirdButton = '';
    }
    if(btnNumber === 3){
      this.allButton = '';
      this.firstButton = '';
      this.secondButton = '';
      this.thirdButton = 'pro';
    }
  
  }
}
