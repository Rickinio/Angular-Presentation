import { Pipe, PipeTransform } from '@angular/core';
import { IDisc } from '../shared/disc';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(discs: IDisc[], filter?: string): IDisc[] {
    let result = discs;
    if(filter){
      result = discs.filter(function(d){
        return d.band.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) != -1
      })
    }
    return result;
  }

}
