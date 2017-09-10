import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fullName'})
export class FullNamePipe implements PipeTransform {
    public transform(value: Object): string {
        const fullName = value['firstName'] + ' ' + value['lastName'];
        return fullName;
    }
}
