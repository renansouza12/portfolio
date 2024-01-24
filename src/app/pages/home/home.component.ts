import { Component } from '@angular/core';
import {IntroductionComponent} from 'src/app/components/introduction/introduction.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { StartComponent } from 'src/app/components/start/start.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
            HeaderComponent,
            StartComponent,
            IntroductionComponent
          ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
