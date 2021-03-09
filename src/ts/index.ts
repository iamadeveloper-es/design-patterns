import '../scss/style.scss';
import { Client, VictorianFactory, ModernFactory, ArtDecoFactory} from './patterns/creational-patterns/abstract-factory';
import { UserFactory, UserType } from './patterns/creational-patterns/factory-method';



const regularUser = UserFactory.createUser(UserType.Regular, 'Jhon');
const premiumUser = UserFactory.createUser(UserType.Premium, 'Monica');
const platinumUser = UserFactory.createUser(UserType.Platinum, 'Robert');

regularUser.getUserInfo();
premiumUser.getUserInfo();
platinumUser.getUserInfo();

//Abstract factory
let victorianChair = new Client().createChair(new VictorianFactory());
let modernSofa = new Client().createSofa(new ModernFactory());
let artDecoTable = new Client().createTable(new ArtDecoFactory());

console.log(victorianChair.info());
console.log(modernSofa.info());
console.log(artDecoTable.info());

