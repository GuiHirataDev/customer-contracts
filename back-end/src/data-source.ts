import { DataSource } from "typeorm";
import "dotenv/config"

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "52564gui",
  database: "projeto_full",
  synchronize: false,
  logging: true,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
});

AppDataSource.initialize().then(() => {
    console.log("Database connected")
}).catch((err) => {
    console.log(err)
})

export { AppDataSource }