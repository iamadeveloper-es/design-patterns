interface IPhone{
    useLightning();
}

interface Android{
    useMicroUSB();
}

export class iPhone7 implements IPhone {
    useLightning() {
        console.log('Using lightning port..');
    }
}

export class GooglePixel implements Android {
    useMicroUSB() {
        console.log('Using micro USB...');
    }
}

// -----
export class LightningToMicroUSBAdapter implements Android {
    androidDevice: Android;

    constructor(android: Android) {
        this.androidDevice = android;
    }

    useMicroUSB() {
        console.log('Want to use micro USB, converting...');
        this.androidDevice.useMicroUSB()
    }
}

export class MicroUSBToLightningAdapter implements IPhone {
    iphoneDevice: IPhone;

    constructor(iphone: IPhone) {
        this.iphoneDevice = iphone;
    }
    useLightning() {
        console.log('Want to use lightning, converting...');
        this.iphoneDevice.useLightning();
    }
}
