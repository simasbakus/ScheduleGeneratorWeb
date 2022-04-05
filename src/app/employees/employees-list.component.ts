import { Component } from '@angular/core';
import { EmployeesService } from './services/employees.service';

@Component({
    template: `
    <div>
      <h2>Employees</h2>
      <div *ngFor="let employee of employees" [routerLink]="['/employees', employee.id]">
        <h3>{{employee.Name}}</h3>
        <h3>{{employee.LastName}}</h3>
        <h3>{{employee.Position}}</h3>
      </div>
    </div>
    `
  })
export class EmployeesListComponent {
  employees:any[] = []
  
  constructor(private employeesService: EmployeesService) { }
  
  ngOnInit() {
    this.employees = this.employeesService.RetrieveAllEmployees()
  }
}