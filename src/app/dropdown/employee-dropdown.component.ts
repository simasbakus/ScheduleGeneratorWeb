import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { EmployeesService } from "../employees/services/employees.service";
import { IEmployee } from "../models/employee.model";

@Component({
    selector: 'employee-dropdown',
    templateUrl: './employee-dropdown.component.html',
    styleUrls: ['./employee-dropdown.component.css']
  })
export class EmployeeDropdownComponent {
  @Output() employeeChangedEvent = new EventEmitter<number>();
  dropdownForm!: FormGroup;
  employees: IEmployee[] = [];

  constructor(private employeesService:EmployeesService, private fb: FormBuilder) { }

  ngOnInit() {
    this.employees = this.employeesService.RetrieveAllEmployees();
    this.dropdownForm = this.fb.group({
      employeeId: [this.employees[0].id]
    });

    this.emitEmployeeId();
  }

  emitEmployeeId() {
    this.employeeChangedEvent.emit(this.dropdownForm.controls['employeeId'].value);
  }
}