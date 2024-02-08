import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { Projects } from 'src/app/models/projects.model';
import { SharedService } from 'src/app/services/shared.service';
import { CursorComponent } from 'src/app/ui/cursor/cursor.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,
    CursorComponent,
    HeroComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  projectSelected: Projects[] = []

  showDetails!: any;

  constructor(private route: ActivatedRoute, private shared: SharedService) {

    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.showDetails = this.shared.projectDetail.find(item => item.id === id);
      if (this.showDetails) {
        this.projectSelected.push(this.showDetails);
      }
    })
  }


}
