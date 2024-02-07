import { Component,Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss','hero.responsive.component.scss']
})
export class HeroComponent {
  @Input() projectName!:string;
  @Input() description!:string;
  @Input() demoLink!:string;
  @Input() repository!:string;
  @Input() techs!:string;
  @Input() firstImage!:string;
  @Input() secondImage!:string;
  @Input() thirdImage!:string;
  
  
}
