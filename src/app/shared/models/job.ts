import { Applicant } from './applicant';
import { Company } from './company';

export class Job {
    id: string;
    title: string;
    companyId: string;
    company: Company;
    applicants: Applicant[];
    description: string;
    companyInfo: string;
    requirements: string;
    benefits: string;
    location: string;
    category: string;
    engagement: string;
}
