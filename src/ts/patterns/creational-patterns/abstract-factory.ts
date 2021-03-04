
export interface AbstractCheesePizzaFactory{
    createCheesePizza(): AbstractCheesePizza;
}

export interface AbstractVeganPizzaFactory{
    createVeganPizza(): AbstractVeganPizza;
}

export class CheesePizzaFactory implements AbstractCheesePizzaFactory{
    public createCheesePizza(): AbstractCheesePizza{
        return new CheesePizza();
    }
   
}

export class VeganPizzaFactory implements AbstractVeganPizzaFactory{
    public createVeganPizza(): AbstractVeganPizza{
        return new VeganPizza();
    }
}

interface AbstractCheesePizza{
    create(): string
}

export class CheesePizza implements AbstractCheesePizza{
    create(): string {
        return 'Cheese Pizza';
    }
}

interface AbstractVeganPizza{
    create(): string
}

export class VeganPizza implements AbstractCheesePizza{
    create(): string {
        return 'Vegan Pizza';
    }
}

export class Client{
    createCheesePizza(pizza: AbstractCheesePizzaFactory){
        return pizza.createCheesePizza();
    }
    createVeganPizza(pizza: AbstractVeganPizzaFactory){
        return pizza.createVeganPizza();
    }
}