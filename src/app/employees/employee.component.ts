import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from './services/employees.service';

@Component({
    template: `
    <div>
      <h3>{{employee.Name}}</h3>
      <h3>{{employee.LastName}}</h3>
    </div>
    `
  })
export class EmployeeComponent {
  employee:any

  constructor(private employeeService:EmployeesService, private route:ActivatedRoute) {
    
  }

  ngOnInit() {
    this.employee = this.employeeService.RetrieveEmployee(+this.route.snapshot.params['id'])
  }
}