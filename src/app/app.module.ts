import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ScheduleAppComponent } from './schedule-app.component';
import { LoginComponent } from './login/login.component';
import { EmployeesListComponent } from './employees/employees-list.component';
import { EmployeeComponent } from './employees/employee.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EmployeesService } from './employees/services/employees.service';
import { SchedulesService } from './schedules/services/schedules.service';
import { SchedulesListComponent } from './schedules/schedules-list.component';
import { ScheduleComponent } from './schedules/schedule.component';
import { ScheduleDayComponent } from './schedules/schedule-day.component';
import { EmployeeDropdownComponent } from './dropdown/employee-dropdown.component';
import { AppRoutes } from './routes';

@NgModule({
  declarations: [
    ScheduleAppComponent,
    LoginComponent,
    EmployeesListComponent,
    EmployeeComponent,
    NavBarComponent,
    SchedulesListComponent,
    ScheduleComponent,
    ScheduleDayComponent,
    EmployeeDropdownComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    ReactiveFormsModule
  ],
  providers: [
    EmployeesService,
    SchedulesService
  ],
  bootstrap: [ScheduleAppComponent]
})
export class AppModule { }
