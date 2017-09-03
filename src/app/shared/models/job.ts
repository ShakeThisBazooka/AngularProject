import { Applicant } from './applicant';
import { Company } from './company';

export class Job {
    id: string;
    title: string;
    company: Company;
    applicants: Applicant[];
    description: string;
    companyInfo: string;
    requirements: string;
    benefits: string;
}
