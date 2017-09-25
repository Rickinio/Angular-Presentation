import {  PipeTransform, Pipe } from '@angular/core';
import { IHero } from './hero';

@Pipe({
    name: 'heroFilter'
})
export class HeroFilterPipe implements PipeTransform {

    transform(value: IHero[], filterBy: string): IHero[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((hero: IHero) =>
        hero.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}