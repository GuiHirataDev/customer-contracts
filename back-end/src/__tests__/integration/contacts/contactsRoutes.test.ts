import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest"
import app from "../../../app"
import { mockedContact, mockedCustomer, mockedCustomerLogin } from "../../mocks";

describe("/contacts", () => {
    let connection: DataSource

    beforeAll(async () => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Error during Data Source initialization", err)
        })

        await request(app).post("/customers").send(mockedCustomer)
    })

    afterAll(async() => {
        await connection.destroy()
    })

    test("POST /contacts - Deve ser capaz de criar um contato", async () => {
        const customerLoginResponse = await request(app).post("/login").send(mockedCustomerLogin)
        const response = await request(app).post("/contacts").set("Authorization", `Bearer ${customerLoginResponse.body.token}`).send(mockedContact)

        expect(response.body).toHaveProperty("name")
        expect(response.body).toHaveProperty("email")
        expect(response.body).toHaveProperty("phone")
        expect(response.status).toBe(201)
    })

    test("POST /contacts - Não deve ser capaz de criar mais de um contato com o mesmo email", async() => {
        const customerLoginResponse = await request(app).post("/login").send(mockedCustomerLogin)
        const response = await request(app).post("/contacts").set("Authorization", `Bearer ${customerLoginResponse.body.token}`).send(mockedContact)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(400)
    })

    test("POST /contacts - Não deve ser capaz de criar um contato sem estar autenticado", async() => {
        const response = await request(app).post("/contacts").send(mockedContact)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })

    test("GET /contacts - Deve ser capaz de listar os contatos", async() => {
        const customerLoginResponse = await request(app).post("/login").send(mockedCustomerLogin)
        const response = await request(app).get("/contacts").set("Authorization", `Bearer ${customerLoginResponse.body.token}`)

        expect(response.body).toHaveLength(1)
        expect(response.status).toBe(200)
    })

    test("GET /contacts - Não deve ser capaz de listar os contatos sem estar autenticado", async() => {

        const response = await request(app).get("/contacts")

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })
})