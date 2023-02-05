import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { mockedCustomer, mockedCustomerLogin } from "../../mocks";

describe("/login", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    await request(app).post("/customers").send(mockedCustomer);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /login - Deve ser capaz de realizar login com o cliente", async () => {
    const response = await request(app)
      .post("/login")
      .send(mockedCustomerLogin);

    expect(response.body).toHaveProperty("token");
    expect(response.status).toBe(200);
  });

  test("POST /login - Não deve ser capaz de ralizar login com usuário ou senha incorretos", async () => {
    const response = await request(app).post("/login").send({
      email: "errado@email.com",
      password: "222333",
    });

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(403);
  });
});
