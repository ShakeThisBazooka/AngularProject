import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment';
import { getHeaders, handleError } from './miscellaneous';
import { Applicant } from '../models/applicant';
import { Job } from '../models/job';

@Injectable()
export class ApplicantService {

  constructor(private http: Http) { }

  public get(applicantId: string): Observable<Applicant> {
    return this.http.get(`${environment.apiEndpoint}/applicant/${applicantId}`, getHeaders())
      .map((res) => res.json())
      .catch((err: Response) => handleError(err));
  }

  public create(applicant: Applicant): Observable<Applicant> {
    return this.http.post(`${environment.apiEndpoint}/applicant`, applicant, getHeaders())
      .map((res) => res.json())
      .catch((err: Response) => handleError(err));
  }

  public update(applicant: Applicant): Observable<any> {
    return this.http.put(`${environment.apiEndpoint}/applicant/${applicant.id}`, applicant, getHeaders())
      .map((res) => res.json())
      .catch((err: Response) => handleError(err));
  }

  public delete(applicantId: string): Observable<any> {
    return this.http.delete(`${environment.apiEndpoint}/applicant/${applicantId}`, getHeaders())
      .map((res) => res.json())
      .catch((err: Response) => handleError(err));
  }

  public getJobs(applicantId: string): Observable<Job[]> {
    return this.http.get(`${environment.apiEndpoint}/applicant/${applicantId}/jobs`, getHeaders())
      .map((res) => res.json())
      .catch((err: Response) => handleError(err));
  }

  public apply(applicantId: string, jobId: string): Observable<any> {
    const newApplicantForJob = {applicantId, jobId};
    return this.http.post(`${environment.apiEndpoint}/applicant/${applicantId}/apply/${jobId}`, newApplicantForJob, getHeaders())
      .map((res) => res.json())
      .catch((err: Response) => handleError(err));
  }
}

