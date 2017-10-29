export interface IUser {
    id:number;
    firstName: string;
    lastName: string;
    email: string;
    sendCatalog: boolean;
    addressType: string;
    street1?: string;
    street2?: string;
    city?: string;
    state: string
    zip?: string;
}