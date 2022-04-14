import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../models/employee.model';
import { EmployeesService } from './services/employees.service';

@Component({
    template: `
    <div>
      <div class="employee-name">
        <h2>{{employee?.name}}</h2>
        <h2>{{employee?.lastName}}</h2>
      </div>
      <div class="employee-position">
        <h3>{{employee?.position}}</h3>
      </div>
      <table class="hour-table">
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <tr>
          <td>{{employee?.defaultWeek?.monday}}</td>
          <td>{{employee?.defaultWeek?.tuesday}}</td>
          <td>{{employee?.defaultWeek?.wednesday}}</td>
          <td>{{employee?.defaultWeek?.thursday}}</td>
          <td>{{employee?.defaultWeek?.friday}}</td>
          <td>{{employee?.defaultWeek?.saturday}}</td>
          <td>{{employee?.defaultWeek?.sunday}}</td>
        </tr>
      </table>
    </div>
    `,
    styles: [`
      .employee-name { display: flex}
      .employee-name h2 { padding: 5px; margin-top: 10px }
      .employee-position { padding: 5px }
    `]
  })
export class EmployeeComponent {
  employee:IEmployee | undefined

  constructor(private employeeService:EmployeesService, private route:ActivatedRoute) {
    
  }

  ngOnInit() {
    this.employee = this.employeeService.RetrieveEmployee(+this.route.snapshot.params['id'])
  }
}