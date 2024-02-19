import { Component } from '@angular/core';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { CursorComponent } from 'src/app/ui/cursor/cursor.component';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CursorComponent,ContactComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

}
