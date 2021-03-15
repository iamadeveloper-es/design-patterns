interface Subject{
    registerObserver(o: Observer);
    notifyObservers();
}

interface Observer{
    update(temperature: number);
}

// ------------------------------------------------------
export class WeatherStation implements Subject {
    private observers: Observer[] = [];
    private temperature: number;

    registerObserver(o: Observer) {
        this.observers.push(o);
    }

    notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this.temperature);
        }
    }

    setTemperature(temp: number) {
        console.log('WeatherStation: new temperature measurement: ' + temp);
        this.temperature = temp;
        this.notifyObservers();
    }
}

// ------------------------------------------------------
export class TemperatureDisplay implements Observer {
    private subject: Subject;
    private temperature: number

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number): number {
        this.temperature = temperature
        console.log(this.temperature);
        return this.temperature
    }
}
