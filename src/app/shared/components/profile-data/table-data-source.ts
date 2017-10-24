import 'rxjs/add/observable/merge';

import {DataSource} from '@angular/cdk';
import {MdPaginator} from '@angular/material';
import { Observable } from 'rxjs/Observable';

export class TableDataSource extends DataSource<any> {
    private internalState: any[];

    constructor(private state: any[]) {
        super();
        this.internalState = state;
    }

    connect(): Observable<any[]> {
        const displayDataChanges = [
            this.internalState
        ];

        return Observable.merge(...displayDataChanges).map(() => {
            const data = this.internalState.slice();

            return data;

        });
    }

    disconnect() { }
}
