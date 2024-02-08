import { Component,Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss','showcase.responsive.component.scss']
})
export class ShowcaseComponent {
  @Input() description!:string;
  @Input() demoLink!:string;
  @Input() repository!:string;
  @Input() techs!:string;
  @Input() secondImage!:string;
  @Input() thirdImage!:string;
  
}
