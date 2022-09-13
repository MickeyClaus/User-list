export class Users {
    id: number;
    name: string;
    email: string;
    phone: number;

    constructor(us: any) {
        this.id = us.id;
        this.name = us.name;
        this.email = us.email;
        this.phone = us.phone;
    }
}
