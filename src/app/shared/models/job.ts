import { Applicant } from './applicant';
import { Company } from './company';

export class Job {
    _id: string;
    title: string;
    companyId: string;
    applicants: Applicant[];
    description: string;
    companyInfo: string;
    requirements: string;
    benefits: string;
    location: string;
    category: string;
    engagement: string;
    counter: number;
}
