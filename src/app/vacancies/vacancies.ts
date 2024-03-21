import { Departments } from "../departments/department";

export interface Vacancies {
    vacancyId: number;
    department?: Departments | null;
    position: string;
    requiredSkillSet: string;
    numberOfOpenings: number;
  }