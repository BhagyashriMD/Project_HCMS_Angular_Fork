import { Employee } from "../employee/employee";
import { LeaveRequests } from "../leave-requests/leave-requests";

export interface LeaveApprovals {
    approvalId: number;
    leaveRequest?: LeaveRequests | null;
    approver?: Employee | null;
    approvalDate: Date;
    status: string;
    comments?: string | null;
  }