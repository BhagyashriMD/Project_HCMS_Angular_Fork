import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Departments } from '../../departments/department';
import { Role } from '../../roles/role';
import { DepartmentsService } from '../../departments/departments.service';
import { RolesService } from '../../roles/roles.service';


@Component({
  selector: 'app-add-employee',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatDatepickerModule, MatFormFieldModule, MatInputModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {

  empManagerName: string = '';
  roleName: string = '';
  departmentName: string = '';

  employee: Employee = {
    employeeId: 0,
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: undefined,
    email: '',
    phone: '',
    address: '',
    nationalId: '',
    maritalStatus: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    position: '',
    skillSet: '',
    employmentStartDate: undefined,
    salary: 0,
    employmentStatus: '',
    bankAccountNumber: ''
  }

  employees: Employee[] = [];
  departments: Departments[] = [];
  roles: Role[] = [];

  constructor(private employeeService: EmployeeService, private departmentService: DepartmentsService, private roleService: RolesService) { }

  ngOnInit(): void {
    this.getDepartments();
    this.getEmployees();
    this.getRoles();
  }

  getEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(response => this.employees = response);
  }

  getDepartments(): void {
    this.departmentService.getAlldepartments().subscribe(response => this.departments = response);
  }

  getRoles(): void {
    this.roleService.getAllRoles().subscribe(response => this.roles = response);
  }

  addEmployee(): void {
    const empId = parseInt(this.empManagerName.split(" ")[0]);
    const deptId = parseInt(this.departmentName.split(" ")[0]);
    const roleId = parseInt(this.roleName.split(" ")[0]);
    this.employeeService.getEmployee(empId).subscribe(resp => {
      this.employee.manager = resp;
      this.roleService.getRole(roleId).subscribe(roleResponse => {
        this.employee.role = roleResponse
        this.departmentService.getdepartment(deptId).subscribe(deptResponse => {
          this.employee.department = deptResponse;
          this.employeeService.createEmployee(this.employee).subscribe(() => {
            console.log('Employee ADDED --', this.employee);
          });
        });
      });
    });
  }


}
