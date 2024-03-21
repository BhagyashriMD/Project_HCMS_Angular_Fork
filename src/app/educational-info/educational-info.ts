import { Employee } from "../employee/employee";

export interface EducationalInfo {
    educationId: number;
    employee?: Employee | null;
    degree: string;
    institute: string;
    major: string;
    graduationYear: number;
    gpa?: number | null; // Assuming GPA is a number
  }