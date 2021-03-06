import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'authpage', component: AuthPageComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
