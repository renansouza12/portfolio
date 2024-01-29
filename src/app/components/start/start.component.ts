import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss','./start.responsive.component.scss']
})
export class StartComponent {
  @Input() title!:string;
  @Input() subTitle!:string;
}
