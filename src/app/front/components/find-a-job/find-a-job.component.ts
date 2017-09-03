import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Job } from '../../../shared/models/job';

@Component({
  selector: 'app-find-a-job',
  templateUrl: './find-a-job.component.html',
  styleUrls: ['./find-a-job.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FindAJobComponent implements OnInit {

  selectedValue: string;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
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

}
