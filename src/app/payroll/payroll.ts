import { Employee } from "../employee/employee";

export interface Payroll {
    payrollId: number;
    employee?: Employee | null;
    salaryMonth: string;
    salaryYear: number;
    basicSalary: number;
    allowances: number;
    deductions: number;
    netSalary: number;
    paymentDate?: Date | null;
  }
