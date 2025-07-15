import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CalulatorComponent } from './calulator/calulator.component';
import { ClockComponent } from './clock/clock.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeesComponent } from './employees/employees.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './auth.guard';
import { ParentComponent } from './parent/parent.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { RatingComponent } from './rating/rating.component';
import { PaymentsModule } from './payments/payments.module';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  {path:'',component:LoginComponent},//default routing
  {path:'registration',component:RegistrationComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:'',component:HomeComponent},//child routing
    {path:'calculator',component:CalulatorComponent},
    {path:'clock',component:ClockComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employees',component:EmployeesComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'create-student',component:CreateStudentComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
    {path:'parent',component:ParentComponent},
    {path:'sibling1',component:Sibling1Component},
    {path:'rating',component:RatingComponent},
    {path:'material',component:MaterialComponent},
    {path:'payments',
      loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
    }
  ]}, //parent Routing
  {path:'**',component:PageNotFoundComponent},//wild card routing 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
