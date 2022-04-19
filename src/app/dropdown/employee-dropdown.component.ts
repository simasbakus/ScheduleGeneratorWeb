import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { EmployeesService } from "../employees/services/employees.service";
import { IEmployee } from "../models/employee.model";

@Component({
    selector: 'employee-dropdown',
    templateUrl: './employee-dropdown.component.html',
    styleUrls: ['./employee-dropdown.component.css']
  })
export class EmployeeDropdownComponent {
  @Output() employeeChangedEvent = new EventEmitter<number>();
  employees: IEmployee[] = [];
  dropdownForm!: FormGroup;
  selectedEmployeeId!: FormControl;

  constructor(private employeesService:EmployeesService) { }

  ngOnInit() {
    this.employees = this.employeesService.RetrieveAllEmployees();
    this.initializeDropdownForm(this.employees[0].id);

    this.emitEmployeeId();
  }

  emitEmployeeId() {
    this.employeeChangedEvent.emit(this.selectedEmployeeId.value);
  }

  initializeDropdownForm(defaultValue: number) {
    this.selectedEmployeeId = new FormControl(defaultValue)
    this.dropdownForm = new FormGroup({
      selectedEmployeeId: this.selectedEmployeeId
    })
  }
}