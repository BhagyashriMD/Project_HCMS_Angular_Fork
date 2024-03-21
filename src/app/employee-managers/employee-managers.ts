import { Employee } from "../employee/employee";

export interface EmployeeManagers {
    relationshipId: number;
    employee?: Employee | null;
    manager?: Employee | null;
    relationshipType?: string | null;
  }