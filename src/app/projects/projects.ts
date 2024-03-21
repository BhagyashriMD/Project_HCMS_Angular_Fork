export interface Projects {
    projectId: number;
    projectName: string;
    projectDescription: string;
    startDate: Date;
    endDate?: Date | null;
    status: string;
  }
  