import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round',
  standalone: true
})
export class RoundpipePipe implements PipeTransform {
    transform (input:number) {
      return Math.floor(input);
    }
 
}
