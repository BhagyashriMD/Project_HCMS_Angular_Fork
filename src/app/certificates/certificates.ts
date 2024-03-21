import { Employee } from "../employee/employee";

export interface Certifications {
    certificationId: number;
    employee?: Employee | null;
    certificationName: string;
    certificationAuthority: string;
    issueDate?: Date | null;
    expiryDate?: Date | null;
  }