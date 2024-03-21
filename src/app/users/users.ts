import { Employee } from "../employee/employee";

export interface Users {
    userId: number;
    employee?: Employee | null;
    username: string;
    password: string; // Password should be encrypted/hashed in real application
}