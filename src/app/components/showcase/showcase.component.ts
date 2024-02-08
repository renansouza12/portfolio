import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {
  @Input() description!:string;
  @Input() demoLink!:string;
  @Input() repository!:string;
  @Input() techs!:string;
  @Input() secondImage!:string;
  @Input() thirdImage!:string;
  
}
