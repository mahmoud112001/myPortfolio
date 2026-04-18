import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  { path: '', component: HomeComponent },             
  { path: 'about', component: AboutMeComponent },    
  { path: 'skills', component: MyskillsComponent },  
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactMeComponent }, 
  { path: '**', redirectTo: '' }                      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }