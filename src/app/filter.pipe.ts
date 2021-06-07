import { Pipe, PipeTransform } from '@angular/core';
import { Oeuvre } from './model/oeuvre.model';
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLocaleLowerCase();
return items.filter( (c: Oeuvre)=> {
      return (c.titreOeuvre?.toLocaleLowerCase().includes(searchText) || c.titre?.toLocaleLowerCase().includes(searchText));
    });
   }
}