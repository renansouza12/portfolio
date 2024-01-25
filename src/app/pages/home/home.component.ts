import { Component } from '@angular/core';
import {IntroductionComponent} from 'src/app/components/introduction/introduction.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { StartComponent } from 'src/app/components/start/start.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { CursorComponent } from 'src/app/ui/cursor/cursor.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
            HeaderComponent,
            StartComponent,
            IntroductionComponent,
            AboutComponent,
            FooterComponent,
            CursorComponent
          ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
