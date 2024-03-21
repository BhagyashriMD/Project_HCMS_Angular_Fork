import { Departments } from "../departments/department";
import { Role } from "../roles/role";


export interface Employee {
    employeeId: number;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date;
    email: string;
    phone: string;
    address: string;
    nationalId: string;
    maritalStatus: string;
    emergencyContactName: string;
    emergencyContactPhone: string;
    department?: Departments | null;
    position: string;
    skillSet: string;
    employmentStartDate: Date;
    employmentEndDate?: Date | null;
    salary: number;
    employmentStatus: string;
    bankAccountNumber: string;
    manager?: Employee | null;
    role?: Role | null;
  }
