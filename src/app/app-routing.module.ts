import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';

import { HomeComponent } from './home/home.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LoginComponent } from './login/login.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
   { path:'',redirectTo:'login',pathMatch:'full' },
  { path: 'home' , component:HomeComponent},
  { path: 'dashboard', component: DashboardComponent },
  {path: 'bar-chart', component: MyBarChartComponent},
  {path: 'Form', component: FormComponent},
  {path: 'line-chart', component: LineChartComponent},
  {path: 'pie-chart', component: PieChartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}


  
  
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ChartsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
