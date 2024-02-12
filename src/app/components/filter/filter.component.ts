import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent{
  @Output() options = new EventEmitter<number>();

  handleButtonClick(btnNumber:number):void{
    this.options.emit(btnNumber)
  }
}
