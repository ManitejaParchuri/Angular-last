import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if (value.length === 0 || filteredString === '') {
      return value;
    }

    const productsArray = [];
    for (const product of value) {
      if (product['courseName'].toLowerCase().includes(filteredString)) {
        productsArray.push(product);
      }
    }
    return productsArray;
  }

}
