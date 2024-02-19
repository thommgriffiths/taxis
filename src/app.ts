import * as express from "express";
import { Request, Response } from "express";
import { User } from "./entity/user.entity";
import { myDataSource } from "./app-data-source";

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
app.use(express.json());

app.get("/users", async function (req: Request, res: Response) {
  const users = await myDataSource.getRepository(User).find();
  res.json(users);
});

app.listen(3000);
