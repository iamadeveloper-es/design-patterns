export enum UserType{
    Regular = 'Regular',
    Premium = 'Premium',
    Platinum = 'Platinum'
}

interface IUser{
    type: UserType
    name: string

    getUserInfo(): void
}

abstract class User implements IUser{
    type: UserType;
    name: string;

    constructor(name: string){
        this.name = name;
    }

    getUserInfo(): void {
        console.log(`Hi, I am ${this.name}, and i am a ${this.type} user...`)
    }

} 

class RegularUser extends User{
    type: UserType = UserType.Regular;
}

class PremiumUser extends User{
    type: UserType = UserType.Premium;
        
}

class PlatinumUser extends User{
    type: UserType = UserType.Platinum;
        
}

export class UserFactory{
    static createUser(role: UserType, name: string){
        switch (role) {
            case UserType.Regular:
                return new RegularUser(name);
                break;
            case UserType.Premium:
                return new PremiumUser(name);
                break;
            case UserType.Platinum:
                return new PlatinumUser(name);
                break;
        }
    }
}


