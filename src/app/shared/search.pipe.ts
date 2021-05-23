import {Pipe, PipeTransform} from '@angular/core';
import {Result} from './interfaces/interfaces';

@Pipe({
  name: 'searchFields'
})
export class SearchPipe implements PipeTransform{
  transform(fields: Result[], search = ''): any {
    if (!search.trim()) {
      return fields
    }

    return fields.filter(field => {
      return field.title.toLowerCase().includes(search.toLowerCase())
    })
  }

}
