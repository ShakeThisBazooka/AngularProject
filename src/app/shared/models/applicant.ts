import { Job } from './job';

export class Applicant {
    userId: string; // connected to user by the same id
    jobs: Job[];
    firstName: string;
    lastName: string;
}
