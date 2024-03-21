import { Employee } from "../employee/employee";
import { LeaveTypes } from "../leave-types/leave-types";

export interface LeaveRequests {
    leaveRequestId: number;
    employee?: Employee | null;
    leaveType?: LeaveTypes | null;
    startDate: Date;
    endDate: Date;
    leaveReason: string;
    status: string;
  }