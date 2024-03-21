import { Employee } from "../employee/employee";

export interface Trainers {
    trainerId: number;
    employee?: Employee | null;
    isExternal?: boolean | null;
  }