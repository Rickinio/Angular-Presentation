import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IUser } from '../template-form/user';

//web-api assumes the entity has id property and it start from 1, zero is for create

export class UserData implements InMemoryDbService {
    
    createDb() {     
        let users: IUser[] =[
            {
                'id': 1,
                "firstName": "Pamela",
                "lastName": "Anderson",
                "email": "pam.anderson@playboy.com",
                "sendCatalog": false,
                "addressType": "home",
                "state": "CA"
            },
            {
                'id': 2,
                "firstName": "Kim",
                "lastName": "Kardasian",
                "email": "kim.kardasian@skai-tv.com",
                "sendCatalog": false,
                "addressType": "home",
                "state": "CA"
            }
        ];           
        return { users };
    }
}