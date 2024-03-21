import { Employee } from "../employee/employee";

export interface SkillUpgradation {
    upgradationId: number;
    employee?: Employee | null;
    skillName: string;
    previousSkillLevel: number;
    newSkillLevel: number;
    upgradationDate: Date;
    upgradedBy?: Employee | null;
  }