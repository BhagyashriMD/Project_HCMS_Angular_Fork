import { Employee } from "../employee/employee";
import { TrainersSchedules } from "../trainers-schedules/trainers-schedules";

export interface TrainingFeedback {
    feedbackId: number;
    trainingSchedule?: TrainersSchedules | null;
    participant?: Employee | null;
    feedbackComments?: string | null;
    satisfactionRating?: number | null;
  }