// Base interface and classes

import e from "express";

export interface BaseChair {
  hasLegs(): boolean;
  sitOn(): void;
}

export interface BaseSofa {
  hasLegs(): boolean;
  lieOn(): void;
}

export interface BaseCoffeeTable {
  hasLegs(): boolean;
  putOn(): void;
}

// Modern furniture

export class ModernChair implements BaseChair {
  hasLegs(): boolean {
    return true;
  }

  sitOn(): void {
    console.log("Sitting on a modern chair");
  }
}

export class ModernSofa implements BaseSofa {
  hasLegs(): boolean {
    return false;
  }

  lieOn(): void {
    console.log("Lying on a modern sofa");
  }
}

export class ModernCoffeeTable implements BaseCoffeeTable {
  hasLegs(): boolean {
    return true;
  }

  putOn(): void {
    console.log("Putting on a modern coffee table");
  }
}

// Victorian furniture

export class VictorianChair implements BaseChair {
  hasLegs(): boolean {
    return true;
  }

  sitOn(): void {
    console.log("Sitting on a victorian chair");
  }
}

export class VictorianSofa implements BaseSofa {
  hasLegs(): boolean {
    return false;
  }

  lieOn(): void {
    console.log("Lying on a victorian sofa");
  }
}

export class VictorianCoffeeTable implements BaseCoffeeTable {
  hasLegs(): boolean {
    return true;
  }

  putOn(): void {
    console.log("Putting on a victorian coffee table");
  }
}

// ArtDeco furniture

export class ArtDecoChair implements BaseChair {
  hasLegs(): boolean {
    return true;
  }

  sitOn(): void {
    console.log("Sitting on an art deco chair");
  }
}

export class ArtDecoSofa implements BaseSofa {
  hasLegs(): boolean {
    return false;
  }

  lieOn(): void {
    console.log("Lying on an art deco sofa");
  }
}

export class ArtDecoCoffeeTable implements BaseCoffeeTable {
  hasLegs(): boolean {
    return true;
  }

  putOn(): void {
    console.log("Putting on an art deco coffee table");
  }
}
