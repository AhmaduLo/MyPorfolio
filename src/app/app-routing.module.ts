import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { WebComponent } from './web/web.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "nav", component:NavBarComponent ,
  },
    
      {
        path: "", component:AcceuilComponent
      },
      {
        path: "web", component:WebComponent
      },
      {
        path: "skills", component:SkillsComponent
      },
      {
        path: "contact", component:ContactComponent
      }
    
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
