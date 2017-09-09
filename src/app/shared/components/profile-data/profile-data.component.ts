import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { Job } from '../../models/job';
import { TableDataSource } from './table-data-source';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit {

  public displayedColumns = [
        // 'Nr.',
        'Title', 'Location', 'Category', 'Engagement', 'Menu'
    ];

  @Input()
  public jobsCount: number;

  @Input()
  public applicantView: string;

  public dataSource: DataSource<any>;
  @Input()
  public jobs: Job[];

  @Input()
  set jobsData(_jobs: Job[]) {
        this.jobs = _jobs;
        if (this.jobs && this.jobs.length) {
            this.dataSource = new TableDataSource(this.jobs);
        }
  }

  @Output()
  public onAddJob: EventEmitter<Job> = new EventEmitter();

  @Output()
  public onDeleteJob: EventEmitter<string> = new EventEmitter();

  @Output()
  public onEditJob: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
