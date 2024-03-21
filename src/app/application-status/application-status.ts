import { CandidateProfiles } from "../candidate-profiles/candidate-profiles";
import { Vacancies } from "../vacancies/vacancies";

export interface ApplicationStatus {
    applicationId: number;
    candidate?: CandidateProfiles | null;
    vacancies?: Vacancies | null;
    status: string;
    applicationDate: Date;
    applicationNotes?: string | null;
  }