import {
  ArtDecoChair,
  ArtDecoCoffeeTable,
  ArtDecoSofa,
  BaseChair,
  BaseCoffeeTable,
  BaseSofa,
  ModernChair,
  ModernCoffeeTable,
  ModernSofa,
  VictorianChair,
  VictorianCoffeeTable,
  VictorianSofa,
} from "./Base";

/**
 * The Abstract Factory interface declares a set of methods that return
 * different abstract products. These products are called a family and are
 * related by a high-level theme or concept. Products of one family are usually
 * able to collaborate among themselves. A family of products may have several
 * variants, but the products of one variant are incompatible with products of
 * another.
 */
export interface AbstractFactory {
  createChair(): BaseChair;
  createSofa(): BaseSofa;
  createCoffeeTable(): BaseCoffeeTable;
}

/**
 * Concrete Factories produce a family of products that belong to a single
 * variant. The factory guarantees that resulting products are compatible. Note
 * that signatures of the Concrete Factory's methods return an abstract product,
 * while inside the method a concrete product is instantiated.
 */
export class ModernFactory implements AbstractFactory {
  createChair(): BaseChair {
    return new ModernChair();
  }

  createSofa(): BaseSofa {
    return new ModernSofa();
  }

  createCoffeeTable(): BaseCoffeeTable {
    return new ModernCoffeeTable();
  }
}

export class VictorianFactory implements AbstractFactory {
  createChair(): BaseChair {
    return new VictorianChair();
  }

  createSofa(): BaseSofa {
    return new VictorianSofa();
  }

  createCoffeeTable(): BaseCoffeeTable {
    return new VictorianCoffeeTable();
  }
}

export class ArtDecoFactory implements AbstractFactory {
  createChair(): BaseChair {
    return new ArtDecoChair();
  }

  createSofa(): BaseSofa {
    return new ArtDecoSofa();
  }

  createCoffeeTable(): BaseCoffeeTable {
    return new ArtDecoCoffeeTable();
  }
}
