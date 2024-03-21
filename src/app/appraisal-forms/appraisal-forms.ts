import { Employee } from "../employee/employee";

export interface AppraisalForms {
    formId: number;
    employee?: Employee | null;
    submissionDate?: Date | null;
    reviewer?: Employee | null;
  }