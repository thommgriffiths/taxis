import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Alfa0576",
  database: "taxi",
  entities: ["dist/**/*.entity.js"],
  logging: true,
  synchronize: true,
});
