import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ScheduleAppComponent } from './schedule-app.component';
import { LoginComponent } from './login/login.component';
import { EmployeesListComponent } from './employees/employees-list.component';
import { EmployeeComponent } from './employees/employee.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EmployeesService } from './employees/services/employees.service';
import { SchedulesListComponent } from './schedules/schedules-list.component';
import { AppRoutes } from './routes';

@NgModule({
  declarations: [
    ScheduleAppComponent,
    LoginComponent,
    EmployeesListComponent,
    EmployeeComponent,
    NavBarComponent,
    SchedulesListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [EmployeesService],
  bootstrap: [ScheduleAppComponent]
})
export class AppModule { }
