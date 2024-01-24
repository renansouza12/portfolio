import { Component } from '@angular/core';
import {IntroductionComponent} from 'src/app/components/introduction/introduction.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { StartComponent } from 'src/app/components/start/start.component';
import { AboutComponent } from 'src/app/components/about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
            HeaderComponent,
            StartComponent,
            IntroductionComponent,
            AboutComponent
          ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
