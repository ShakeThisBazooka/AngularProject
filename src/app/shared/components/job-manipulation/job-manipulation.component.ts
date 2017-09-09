import { Component, OnInit, Output, EventEmitter, Optional, Inject } from '@angular/core';
import { Job } from '../../models/job';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-job-manipulation',
  templateUrl: './job-manipulation.component.html',
  styleUrls: ['./job-manipulation.component.css']
})
export class JobManipulationComponent implements OnInit {
    public job: Job;
    public onEdit: boolean;
    public form: FormGroup;

    @Output()
    public onJobSubmit: EventEmitter<Job> = new EventEmitter();
  constructor(
    public dialogRef: MdDialogRef<any>,
                       @Optional() @Inject(MD_DIALOG_DATA) private data: any
  ) {
        this.job = data || new Job();
        !data ? this.onEdit = false : this.onEdit = true;

        this.form = new FormGroup({
            title: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            companyInfo: new FormControl('', [Validators.required]),
            requirements: new FormControl('', [Validators.required]),
            benefits: new FormControl('', [Validators.required]),
            location: new FormControl('', [Validators.required]),
            category: new FormControl('', [Validators.required]),
            engagement: new FormControl('', [Validators.required]),
        });
  }

  ngOnInit() {
  }

  public onSubmit(job: Job) {
        this.dialogRef.close(job);
        this.job = new Job();
        this.onJobSubmit.emit(job);
    }

}
