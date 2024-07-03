import { Adaptee, Adapter, Target } from "./Base";

function clientCode(target: Target) {
  console.log(target.request());
}

/**
 * Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.
 * The Adapter acts as a wrapper between two objects. It catches calls for one object and transforms them to format and interface recognizable by the second object.
 */
export default function run() {
  console.log("Client: I can work just fine with the Target objects:");
  const target = new Target();
  clientCode(target);

  console.log("");

  const adaptee = new Adaptee();
  console.log(
    "Client: The Adaptee class has a weird interface. See, I don't understand it:"
  );
  console.log(`Adaptee: ${adaptee.specificRequest()}`);

  console.log("");

  console.log("Client: But I can work with it via the Adapter:");
  const adapter = new Adapter(adaptee);
  clientCode(adapter);
}
