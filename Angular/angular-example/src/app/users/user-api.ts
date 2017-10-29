import { InMemoryDbService } from "angular-in-memory-web-api";
import { IUser } from "./user";

export class InMemoryUserApi implements InMemoryDbService {
    
    createDb() {     
        let users: IUser[] =[
            {
                id: 0,
                firstName: 'John',
                lastName: 'Travolta',
                email: 'john@movies.com',
                sendCatalog: false,
                addressType: 'home',
                state:'CA'
            },
            {
                id: 1,
                firstName: 'Iron',
                lastName: 'Mike',
                email: 'iron@boxing.com',
                sendCatalog: false,
                addressType: 'home',
                state:'CA'
            }
        ];           
        return { users };
    }
}