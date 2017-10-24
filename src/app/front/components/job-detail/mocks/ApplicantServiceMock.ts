import { Observable } from 'rxjs/Observable';
export class ApplicantServiceMock {
    apply(userId, jobId) {
        return Observable.of({});
    }
}
