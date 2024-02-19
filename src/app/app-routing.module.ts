import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {
    path:"Home",
    component:HomeComponent
  },
  {
    path:"Projects",
    component:ProjectsComponent
  },
  {
    path:"Details/:id",
    component:DetailsComponent
  },
  {
    path:"Courses",
    component:CoursesComponent
  },
  {
    path:"Contact",
    component:ContactMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
