import '../scss/style.scss';
import {CarBuilderDirector, FerrariCarBuilder, MercedesCarBuilder, BMWCarBuilder } from './patterns/creational-patterns/builder';
import { Client, VictorianFactory, ModernFactory, ArtDecoFactory} from './patterns/creational-patterns/abstract-factory';
import { UserFactory, UserType } from './patterns/creational-patterns/factory-method';
import { PrototypeTest } from './patterns/creational-patterns/prototype';
import { SingletonTest } from './patterns/creational-patterns/singleton';
import { LightningToMicroUSBAdapter, iPhone7, GooglePixel, MicroUSBToLightningAdapter } from './patterns/structural-patterns/adapter';
import { BridgeTest } from './patterns/structural-patterns/bridge';
import { CompositeTest } from './patterns/structural-patterns/composite';
import { SmartAirSuspension, RearFacingSeats, ModelS} from './patterns/structural-patterns/decorator';
import { BlurayPlayer, Amplifier, Lights, TV, PopcornMaker, HomeTheaterFacade } from './patterns/structural-patterns/facade';
import { FlyweightTest } from './patterns/structural-patterns/flyweight';
import { ProxyTest } from './patterns/structural-patterns/proxy';
import { ChainOfResponsibilityTest } from './patterns/behavioral-patterns/chain-of-responsibility';
import { CommandTest } from './patterns/behavioral-patterns/command';
import { InterpreterTest } from './patterns/behavioral-patterns/interpreter';
import { IteratorTest } from './patterns/behavioral-patterns/iterator';
import { MementoTest } from './patterns/behavioral-patterns/memento';
import { VisitorTest } from './patterns/behavioral-patterns/visitor';
import { StateTest } from './patterns/behavioral-patterns/state';
import { TemplateMethodTest } from './patterns/behavioral-patterns/template-method';
import { TemperatureDisplay, WeatherStation } from './patterns/behavioral-patterns/observer';
import { StrategyTest } from './patterns/behavioral-patterns/strategy';
//import { MediatorTest } from './patterns/behavioral-patterns/mediator';



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

//Decorator
let myTesla = new ModelS();
myTesla = new SmartAirSuspension(myTesla);
myTesla = new RearFacingSeats(myTesla);

console.log(myTesla.cost());
console.log(myTesla.getDescription());

//Facade
let bluray = new BlurayPlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = new TV();
let popcornMaker = new PopcornMaker();

let hometheater = new HomeTheaterFacade(amp, bluray, lights, tv, popcornMaker);
hometheater.watchMovie();

//FlyWeight
FlyweightTest.test()

//Proxy
ProxyTest.test()

//Chain of Responsability
//ChainOfResponsibilityTest.test()

//Command
CommandTest.test();

//Interpreter
InterpreterTest.test()

//Iterator
IteratorTest.test();

//Mediator
//MediatorTest.test()

//Memento
MementoTest.test()

//Visitor
VisitorTest.test();

//State
StateTest.test();

//template Method
TemplateMethodTest.test()

//Observer
let weatherStation = new WeatherStation();

let tempDisplay = new TemperatureDisplay(weatherStation);

weatherStation.setTemperature(50);

//Strategy
StrategyTest.test()
