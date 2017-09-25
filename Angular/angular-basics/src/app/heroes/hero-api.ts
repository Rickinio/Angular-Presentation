import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IHero } from './hero';

//web-api assumes the entity has id property and it start from 1, zero is for create

export class HeroData implements InMemoryDbService {

    createDb() {
        let heroes: IHero[] = [
            {
                'id': 1,
                'name':'Ironman',
                'strength':'Jarvis',
                'imageUrl': 'https://sh-s7-live-s.legocdn.com/is/image/LEGO/41590',
            },
            {
                'id': 2,
                'name':'Batman',
                'strength':'Alfread',
                'imageUrl': 'http://www.legobatman.com/assets//media/story/batman.png',
            },
            {
                'id': 3,
                'name':'Superman',
                'strength':'Pew pew laser eyes',
                'imageUrl': 'https://images-na.ssl-images-amazon.com/images/I/51xW9So%2Bd-L._SL500_AC_SS350_.jpg',
            },            
        ];
        return { heroes };
    }
}