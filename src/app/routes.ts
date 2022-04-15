import { Routes } from "@angular/router";
import { EmployeesListComponent } from "./employees/employees-list.component";
import { EmployeeComponent } from "./employees/employee.component";
import { SchedulesListComponent } from "./schedules/schedules-list.component";
import { ScheduleComponent } from "./schedules/schedule.component";

export const AppRoutes:Routes = [
    { path: 'schedules', component: SchedulesListComponent },
    { path: 'employees', component: EmployeesListComponent },
    { path: 'employees/:id', component: EmployeeComponent },
    { path: 'schedule/:month', component: ScheduleComponent },
    { path: '', redirectTo: '/schedules', pathMatch: 'full' }
]