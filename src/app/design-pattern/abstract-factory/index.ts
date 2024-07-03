import { AbstractFactory, ModernFactory, VictorianFactory } from "./Factory";

export function clientCode(factory: AbstractFactory) {
  const chair = factory.createChair();
  const sofa = factory.createSofa();
  const coffeeTable = factory.createCoffeeTable();
  console.log(chair.hasLegs());
  chair.sitOn();
}

/**
 * Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.
 */
export default function run() {
  console.log("Client: Testing client code with the first factory type:");
  clientCode(new ModernFactory());

  console.log(
    "Client: Testing the same client code with the second factory type:"
  );
  clientCode(new VictorianFactory());
}
