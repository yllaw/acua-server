import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: string;
    username: string;
    password: string;
    location?: string;
    window: number;
    loggedIn: boolean;
    constructor(data?: Partial<User>);
}
