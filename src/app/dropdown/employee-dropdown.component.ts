import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmployeesService } from "../employees/services/employees.service";
import { IEmployee } from "../models/employee.model";

@Component({
    selector: 'employee-dropdown',
    templateUrl: './employee-dropdown.component.html',
    styleUrls: ['./employee-dropdown.component.css']
  })
export class EmployeeDropdownComponent {
  employees:IEmployee[] = [];
  selectedEmployee:IEmployee | undefined;

  constructor(private employeesService: EmployeesService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.employees = this.employeesService.RetrieveAllEmployees();
    this.selectedEmployee = this.employees.find(e => e.id === +this.route.snapshot.params['employeeId'])
  }
}