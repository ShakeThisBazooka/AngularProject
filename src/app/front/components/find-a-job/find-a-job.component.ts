import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Job } from '../../../shared/models/job';
import { JobService } from '../../../shared/services/job.service';
import { CompanyService } from '../../../shared/services/company.service';

@Component({
  selector: 'app-find-a-job',
  templateUrl: './find-a-job.component.html',
  styleUrls: ['./find-a-job.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FindAJobComponent implements OnInit {

  selectedLocation: string;
  selectedCategory: string;
  selectedEngagement: string;


  public locations = [
    {value: undefined, viewValue: 'None'},
    {value: 'Sofia', viewValue: 'Sofia'},
    {value: 'Plovdiv', viewValue: 'Plovdiv'},
    {value: 'Burgas', viewValue: 'Burgas'},
    {value: 'Pleven', viewValue: 'Pleven'},
  ];

  public engagements = [
    {value: undefined, viewValue: 'None'},
    {value: 'part-time', viewValue: 'Part-time'},
    {value: 'full-time', viewValue: 'Full-time'},

  ];
  public categories = [
    {value: undefined, viewValue: 'None'},
    {value: 'IT', viewValue: 'IT'},
    {value: 'Art', viewValue: 'Art'},
    {value: 'Health Care', viewValue: 'Health Care'},
    {value: 'Transportation', viewValue: 'Transportation'},
    {value: 'Banking & Finance', viewValue: 'Banking & Finance'},
    {value: 'Customer Service', viewValue: 'Customer Service'},
  ];

  public jobs: Job[];

  constructor(private jobService: JobService,
              private companyService: CompanyService
  ) { }

  ngOnInit() {
    this.filterJobs();
  }

  public filterJobs(location?, engagement?, category?) {
    let query;
    if (!location || !engagement || !category) {
      query = undefined;
    } else {
      query = {
        location: location,
        engagement: engagement,
        category: category };
    }
    this.jobService.getMany(query)
      .subscribe((jobs: Job[]) => {
        this.jobs = jobs;
      });
  }
}
