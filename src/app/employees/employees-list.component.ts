import { Component } from '@angular/core';
import { IEmployee } from '../models/employee.model';
import { EmployeesService } from './services/employees.service';

@Component({
    template: `
    <div class="list">
      <h2>Employees</h2>
      <div *ngFor="let employee of employees" [routerLink]="['/employees', employee.id]" class="list-element">
        <h3>{{employee.name}}</h3>
        <h3>{{employee.lastName}}</h3>
        <h3>{{employee.position}}</h3>
      </div>
    </div>
    `,
    styles: [`
      .list h2 { margin: 15px 0}
      .list-element { display: flex; border-bottom: black solid 2px; margin: 2px 0; cursor: pointer; width: 40%; }
      .list-element h3 { padding: 5px; margin: 0 }
      .list-element:hover { background-color: #bbb }
    `]
  })
export class EmployeesListComponent {
  employees:IEmployee[] = []
  
  constructor(private employeesService: EmployeesService) { }
  
  ngOnInit() {
    this.employeesService.RetrieveAllEmployees().subscribe(data => this.employees = data);
  }
}