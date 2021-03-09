enum FurnitureType{
    Chair = 'Chair',
    Sofa = 'Sofa',
    Table = 'Mesilla'
  
  }
  
  enum FurnitureModel{
    ArtDeco = 'Art Decó',
    Victorian = 'Victoriano',
    Modern = 'Moderno'
  }
  
  interface AbstractFurniture{
    name: string
    type: FurnitureType
    model: FurnitureModel
    info(): string
  }
  
  abstract class Furniture implements AbstractFurniture{
    name: string
    type: FurnitureType
    model: FurnitureModel
    info(): string{
      return `Producto ${this.type}, modelo ${this.model}`;
    }
  }
  
  abstract class Chair extends Furniture{
    type: FurnitureType = FurnitureType.Chair
  }
  
  class ArtDecoChair extends Chair{
    model: FurnitureModel = FurnitureModel.ArtDeco
  }
  
  class VictorianChair extends Chair{
    model: FurnitureModel = FurnitureModel.Victorian
  }
  
  class ModernChair extends Chair{
    model: FurnitureModel = FurnitureModel.Modern
  }
  
  abstract class Sofa extends Furniture{
    type: FurnitureType = FurnitureType.Sofa
  }
  
  class ArtDecoSofa extends Sofa{
    model: FurnitureModel = FurnitureModel.ArtDeco
  }
  
  class VictorianSofa extends Sofa{
    model: FurnitureModel = FurnitureModel.Victorian
  }
  
  class ModernSofa extends Sofa{
    model: FurnitureModel = FurnitureModel.Modern
  }
  
  abstract class Table extends Furniture{
    type: FurnitureType = FurnitureType.Table
  }
  
  class ArtDecoTable extends Table{
    model: FurnitureModel = FurnitureModel.ArtDeco
  }
  
  class VictorianTable extends Table{
    model: FurnitureModel = FurnitureModel.Victorian
  }
  
  class ModernTable extends Table{
    model: FurnitureModel = FurnitureModel.Modern
  }
  
  interface AbstractFurnitureFactory{
    createChair(): Furniture
    createSofa(): Furniture
    createTable(): Furniture
  } 
  
  export class ArtDecoFactory implements AbstractFurnitureFactory{
    createChair(): Furniture{
      return new ArtDecoChair()
    }
    createSofa(): Furniture{
      return new ArtDecoSofa()
    }
    createTable(): Furniture{
      return new ArtDecoTable()
    }
  }
  
  export class VictorianFactory implements AbstractFurnitureFactory{
    createChair(): Furniture{
      return new VictorianChair()
    }
    createSofa(): Furniture{
      return new VictorianSofa()
    }
    createTable(): Furniture{
      return new VictorianTable()
    }
  }
  
  export class ModernFactory implements AbstractFurnitureFactory{
    createChair(): Furniture{
      return new ModernChair()
    }
    createSofa(): Furniture{
      return new ModernSofa()
    }
    createTable(): Furniture{
      return new ModernTable()
    }
  }
  
  export class Client{
    createChair(furniture: AbstractFurnitureFactory){
      return furniture.createChair()
    }
    createSofa(furniture: AbstractFurnitureFactory){
      return furniture.createSofa()
    }
    createTable(furniture: AbstractFurnitureFactory){
      return furniture.createTable()
    }
  }
  