import { Trainers } from "../trainers/trainers";
import { TrainingModules } from "../training-modules/training-modules";

export interface TrainersSchedules {
    scheduleId: number;
    trainingModule?: TrainingModules | null;
    trainer?: Trainers | null;
    startDate: Date;
    endDate: Date;
    location: string;
    maxParticipants: number;
}