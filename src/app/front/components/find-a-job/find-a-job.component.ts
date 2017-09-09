import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Job } from '../../../shared/models/job';

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
    {value: 'sofia', viewValue: 'Sofia'},
    {value: 'plovdiv', viewValue: 'Plovdiv'},
    {value: 'burgas', viewValue: 'Burgas'},
    {value: 'pleven', viewValue: 'Pleven'},
  ];
  public engagements = [
    {value: 'part-time', viewValue: 'Part-time'},
    {value: 'full-time', viewValue: 'Full-time'},

  ];
  public categories = [
    {value: 'it', viewValue: 'IT'},
    {value: 'art', viewValue: 'Art'},
    {value: 'health', viewValue: 'Health Care'},
    {value: 'transportation', viewValue: 'Transportation'},
    {value: 'banking-finance', viewValue: 'Banking & Finance'},
    {value: 'customer-service', viewValue: 'Hospitality'},
    {value: 'hospitality', viewValue: 'Customer Service'},
  ];

  public jobs = [
    {
      title: 'Javascript Engineer',
      description: `A JavaScript developer is responsible for
                    implementing the front-end logic that defines the behavior of the visual elements
                    of a web application. `,
      company: {
        name: 'Centroida'
      }
    },
    {
      title: 'Javascript Engineer',
      description: `A JavaScript developer is responsible for
                    implementing the front-end logic that defines the behavior of the visual elements
                    of a web application. `,
      company: {
        name: 'Centroida'
      }
    },
    {
      title: 'Javascript Engineer',
      description: `A JavaScript developer is responsible for
                    implementing the front-end logic that defines the behavior of the visual elements
                    of a web application. `,
      company: {
        name: 'Centroida'
      }
    },
    {
      title: 'Javascript Engineer',
      description: `A JavaScript developer is responsible for
                    implementing the front-end logic that defines the behavior of the visual elements
                    of a web application. `,
      company: {
        name: 'Centroida'
      }
    },
    {
      title: 'Javascript Engineer',
      description: `A JavaScript developer is responsible for
                    implementing the front-end logic that defines the behavior of the visual elements
                    of a web application. `,
      company: {
        name: 'Centroida'
      }
    },
    {
      title: 'Javascript Engineer',
      description: `A JavaScript developer is responsible for
                    implementing the front-end logic that defines the behavior of the visual elements
                    of a web application. `,
      company: {
        name: 'Centroida'
      }
    },
    {
      title: 'Javascript Engineer',
      description: `A JavaScript developer is responsible for
                    implementing the front-end logic that defines the behavior of the visual elements
                    of a web application. `,
      company: {
        name: 'Centroida'
      }
    },
    {
      title: 'Javascript Engineer',
      description: `A JavaScript developer is responsible for
                    implementing the front-end logic that defines the behavior of the visual elements
                    of a web application. `,
      company: {
        name: 'Centroida'
      }
    }

  ];
  constructor() { }

  ngOnInit() {
  }

  public filterJobs(location, engagement, category) {

  }
}
