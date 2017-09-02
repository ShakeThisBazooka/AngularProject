import { Observable } from 'rxjs/Observable';
import { Response, RequestOptions, Headers } from '@angular/http';

export function handleError(error: Response) {
        let err;
        err = error.json() || error;
        return Observable.throw(err);
}

export function getHeaders() {
        const headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `${localStorage.getItem('cookie')}`);
        headers.append('Accept', 'application/json');
        return new RequestOptions({headers: headers});
}
