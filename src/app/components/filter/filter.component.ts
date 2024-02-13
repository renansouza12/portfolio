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
  
  handleButtonClick(btnNumber:number):void{
    this.options.emit(btnNumber)
  }
}
