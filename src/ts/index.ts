import '../scss/style.scss';
import { Client, VictorianFactory, ModernFactory, ArtDecoFactory} from './patterns/creational-patterns/abstract-factory';
import {CarBuilderDirector, FerrariCarBuilder, MercedesCarBuilder, BMWCarBuilder } from './patterns/creational-patterns/builder';
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

//Builder
const ferrari = new FerrariCarBuilder();
const mercedes = new MercedesCarBuilder();
const bmw = new BMWCarBuilder();

const ferrariDirector = new CarBuilderDirector(ferrari);
const mercedesDirector = new CarBuilderDirector(mercedes);
const bmwDirector = new CarBuilderDirector(bmw);

ferrariDirector.build();
mercedesDirector.build();
bmwDirector.build();

console.log(ferrariDirector.getCar());
console.log(mercedesDirector.getCar());
console.log(bmwDirector.getCar());

