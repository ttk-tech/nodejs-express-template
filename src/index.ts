// import express, { Request, Response, Express } from "express";

// const app: Express = express();
// const port = 3000;

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello, World!");
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

import abstractFactory from "./app/design-pattern/abstract-factory/index";
import builder from "./app/design-pattern/builder/index";
import adapter from "./app/design-pattern/adapter/index";

adapter();
