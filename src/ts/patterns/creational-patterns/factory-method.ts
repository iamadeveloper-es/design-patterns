export enum Role{
    Admin,
    Doctor,
    Patient
}

interface User{
    role: Role
    name: string

    userGreetting(): void
}

class Admin implements User{
    role: Role = Role.Admin;
    name: string;

    userGreetting(): void{
        return console.log(`Hi, i am an ${this.role}`);
    }
    
}

class Doctor implements User{
    role: Role = Role.Doctor;
    name: string;

    userGreetting(): void{
        return console.log(`Hi, i am a ${this.role}`);
    }
    
}

class Patient implements User{
    role: Role = Role.Patient;
    name: string;

    userGreetting(): void{
        return console.log(`Hi, i am a ${this.role}`);
    }
    
}

abstract class UserFactory{
    static createUser(role: Role): User{
        switch (role) {
            case Role.Admin:
                return new Admin();
                break;
            case Role.Doctor:
                return new Doctor();
                break;
            case Role.Patient:
                return new Patient();
                break;
        }
    }
}

export class FactoryMethodTest{
    static test(role: Role){
         const user: User = UserFactory.createUser(role);
         return user;
    }
}




export enum TransportType{
    Land = 'Terrestre',
    Sea = 'Marítimo', 
    Air = 'Aéreo'
}

interface Transport{
    type: TransportType 

    createTransport(): void
}

class LandTransport implements Transport{
    type: TransportType = TransportType.Land 

    createTransport(): void{
        return console.log(`Transporte tipo: ${this.type}`);
    }
}

class SeaTransport implements Transport{
    type: TransportType = TransportType.Sea

    createTransport(): void{
        return console.log(`Transporte tipo: ${this.type}`);
    }
}

class AirTransport implements Transport{
    type: TransportType = TransportType.Air

    createTransport(): void{
        return console.log(`Transporte tipo: ${this.type}`);
    }
}

export class TransportFactory{
    
    static create(type: TransportType){
        switch (type) {
            case TransportType.Land:
                return new LandTransport();
                break;
            case TransportType.Sea:
                return new SeaTransport();
                break;
            case TransportType.Air:
                return new AirTransport();
                break;
        }
    }
}

