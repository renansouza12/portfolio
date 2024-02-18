import { Component,Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() footerContent!:string;
  @Input() footerNamePage!:string;
  @Input() footerBackground!:string;
  @Input() footerLink!:string;
}
