import { Company } from './../../../../shared/models/company';
import { Observable } from 'rxjs/Observable';
export class CompanyServiceMock {
    get(id) {
        const company: Company = new Company();
        company.userId = '1234';
        company.name = 'Name';
        company.vat = 'vat';
        company.field = 'field';
        company.jobs = [];

        return Observable.of(company);
    }
}
