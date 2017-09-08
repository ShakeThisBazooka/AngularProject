import { Job } from './job';

export class Company {
    userId: string; // connected to user by the same id
    jobs: Job[];
    name: string;
    vat: string;
    field: string;
}
