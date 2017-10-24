import { Applicant } from '../../../../shared/models/applicant';
import { Job } from '../../../../shared/models/job';
import { Observable } from 'rxjs/Observable';
export class JobServiceMock {
    getOne(id) {
        const applicant: Applicant = new Applicant();
        applicant.userId = '123';
        applicant.firstName = 'firstName';
        applicant.lastName = 'lastName';
        applicant.jobs = [];

        const applicant2: Applicant = new Applicant();
        applicant2.userId = '1232';
        applicant2.firstName = 'firstName2';
        applicant2.lastName = 'lastName2';
        applicant2.jobs = [];

        const applicants: Applicant[] = new Array();
        applicants.push(applicant);
        applicants.push(applicant2);

        const job: Job = new Job();
        job._id = id;
        job.applicants = applicants;

        return Observable.of({applicants: job.applicants});
    }
}
