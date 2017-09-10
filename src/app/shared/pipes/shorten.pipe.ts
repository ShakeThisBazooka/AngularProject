import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  public transform(value: string): string {
        const shortened = value.substring(0, 150) + '...';
        return shortened;
    }

}
