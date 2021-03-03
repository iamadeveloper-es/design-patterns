import '../scss/style.scss';
import { TransportFactory, TransportType } from './patterns/creational-patterns/factory-method';

// Factory Method
const camion = TransportFactory.create(TransportType.Land);
const barco = TransportFactory.create(TransportType.Sea);
const avion = TransportFactory.create(TransportType.Air);

camion.createTransport();
barco.createTransport();
avion.createTransport();
