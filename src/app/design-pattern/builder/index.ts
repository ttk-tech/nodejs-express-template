import { Server, ServerBuilderImpl } from "./Base";

/**
 * Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.
 */
export default function run() {
  const newServer: Server = new ServerBuilderImpl()
    .setName("newServer")
    .setOS("Linux")
    .setPort(8080)
    .build();
  console.log(newServer);
}
