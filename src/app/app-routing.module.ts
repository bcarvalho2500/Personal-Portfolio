import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactmeComponent } from './contactme/contactme.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'contact',
    component: ContactmeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
