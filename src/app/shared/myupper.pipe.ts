import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myupper'
})
export class MyupperPipe implements PipeTransform {

  transform(value:any):any {
    return value.toUpperCase();
  }

}
