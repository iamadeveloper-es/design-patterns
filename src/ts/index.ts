import '../scss/style.scss';
import {CarBuilderDirector, FerrariCarBuilder, MercedesCarBuilder, BMWCarBuilder } from './patterns/creational-patterns/builder';
import { Client, VictorianFactory, ModernFactory, ArtDecoFactory} from './patterns/creational-patterns/abstract-factory';
import { UserFactory, UserType } from './patterns/creational-patterns/factory-method';
import { PrototypeTest } from './patterns/creational-patterns/prototype';
import { SingletonTest } from './patterns/creational-patterns/singleton';
import { LightningToMicroUSBAdapter, iPhone7, GooglePixel, MicroUSBToLightningAdapter } from './patterns/structural-patterns/adapter';
import { BridgeTest } from './patterns/structural-patterns/bridge';
import { CompositeTest } from './patterns/structural-patterns/composite';



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

//Prototype
const prototype = PrototypeTest.test()

//Singleton
const singleton = SingletonTest.test()


//STRUCTURAL PATTERNS

//Adapter
let googlePixel = new GooglePixel()
let chargeAdaptor = new LightningToMicroUSBAdapter(googlePixel);

chargeAdaptor.useMicroUSB()

let iphone7 = new iPhone7();

let chargeAdaptor2 = new MicroUSBToLightningAdapter(iphone7)
chargeAdaptor2.useLightning();

//Bridge
BridgeTest.test()

//Composite
CompositeTest.test()