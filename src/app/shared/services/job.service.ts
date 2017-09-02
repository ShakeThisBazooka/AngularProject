import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment';
import { getHeaders, handleError } from './miscellaneous';
import { Job } from '../models/job';

@Injectable()
export class JobService {

  constructor(private http: Http) { }

  public getMany(query?: any): Observable<Job[]> {
    const queryParams = query ? `?location=${query.location}&category=${query.category}&type=${query.type}` : ``;
    return this.http.get(`${environment.apiEndpoint}/jobs${queryParams}`, getHeaders())
      .map((res) => res.json())
      .catch((err: Response) => handleError(err));
  }

  public getOne(jobId: string): Observable<Job> {
    return this.http.get(`${environment.apiEndpoint}/jobs/${jobId}`, getHeaders())
      .map((res) => res.json())
      .catch((err: Response) => handleError(err));
  }

}
