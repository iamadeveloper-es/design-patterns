import '../scss/style.scss';
import { Client, CheesePizzaFactory, VeganPizzaFactory, CheesePizza, VeganPizza } from './patterns/creational-patterns/abstract-factory';
import { UserFactory, UserType } from './patterns/creational-patterns/factory-method';



const regularUser = UserFactory.createUser(UserType.Regular, 'Jhon');
const premiumUser = UserFactory.createUser(UserType.Premium, 'Monica');
const platinumUser = UserFactory.createUser(UserType.Platinum, 'Robert');

regularUser.getUserInfo();
premiumUser.getUserInfo();
platinumUser.getUserInfo();

//Abstract factory
let order1: CheesePizza = new Client().createCheesePizza(new CheesePizzaFactory);
let order2: VeganPizza = new Client().createVeganPizza(new VeganPizzaFactory);


console.log(order1.create());
console.log(order2.create());

