import { Employee } from "../employee/employee";

export interface SkillMatrix {
    matrixId: number;
    employee?: Employee | null;
    skillName: string;
    skillLevel: number;
    lastUpdated?: Date | null;
  }