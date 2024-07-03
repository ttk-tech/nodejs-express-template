export interface ServerBuilder {
  setName(name: string): ServerBuilder;
  setPort(port: number): ServerBuilder;
  setOS(os: string): ServerBuilder;
  getServer(): Server;
  build(): Server;
}

export class Server {
  name: string = "defaultName";
  port: number = 8080;
  os: string = "defaultOS";

  constructor(name: string, port: number, os: string) {
    this.name = name;
    this.port = port;
    this.os = os;
  }
}

export class ServerBuilderImpl implements ServerBuilder {
  private server: Server;

  constructor() {
    this.server = new Server("", 0, "");
  }

  setName(name: string): ServerBuilder {
    this.server.name = name;
    return this;
  }

  setPort(port: number): ServerBuilder {
    this.server.port = port;
    return this;
  }

  setOS(os: string): ServerBuilder {
    this.server.os = os;
    return this;
  }

  build(): Server {
    return this.server;
  }

  getServer(): Server {
    return this.server;
  }
}
