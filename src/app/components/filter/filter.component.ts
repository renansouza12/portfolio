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
  @Input() message: boolean = false;

  activeButton: string = '';

  handleButtonClick(btnNumber: number): void {
    this.options.emit(btnNumber);
    this.setActiveButton(btnNumber);
  }

  private setActiveButton(btnNumber: number): void {
    this.activeButton = '';
    switch (btnNumber) {
      case 0:
        this.activeButton = 'all';
        break;
      case 1:
        this.activeButton = 'newba';
        break;
      case 2:
        this.activeButton = 'inter';
        break;
      case 3:
        this.activeButton = 'pro';
        break;
      default:
        break;
    }
  }
}
