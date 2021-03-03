interface Chair{
    hasLeghs();
    sitOn();
}

interface Sofa extends Chair{
    hasLeghs();
    sitOn();
}

class victorianChair implements Chair{
    hasLeghs() {
        throw new Error("Method not implemented.");
    }
    sitOn() {
        throw new Error("Method not implemented.");
    }
    
}

class ModernChair implements Chair{
    hasLeghs() {
        throw new Error("Method not implemented.");
    }
    sitOn() {
        throw new Error("Method not implemented.");
    }
    
}

class victorianSofa implements Sofa{;
    hasLeghs() {
        throw new Error("Method not implemented.");
    }
    sitOn() {
        throw new Error("Method not implemented.");
    }
    
}

class ModernSofa implements Sofa{;
    hasLeghs() {
        throw new Error("Method not implemented.");
    }
    sitOn() {
        throw new Error("Method not implemented.");
    }
    
}

interface FurnitureFactory{
    createChair(): Chair
    createSofa(): Sofa
}

class VictorianFurnitureFactory implements FurnitureFactory{
    createChair(): Chair {
        throw new Error("Method not implemented.");
    }
    createSofa(): Sofa {
        throw new Error("Method not implemented.");
    }
    
}

class ModernFurnitureFactory implements FurnitureFactory{
    createChair(): Chair {
        throw new Error("Method not implemented.");
    }
    createSofa(): Sofa {
        throw new Error("Method not implemented.");
    }
    
}