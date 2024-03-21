import { Employee } from "../employee/employee";

export interface CandidateProfiles {
    candidateId: number;
    employee?: Employee | null;
  }
  