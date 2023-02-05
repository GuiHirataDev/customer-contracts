import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest"
import app from "../../../app";
import { mockedCustomer, mockedCustomerLogin } from "../../mocks";

describe("/customers", () => {
    let connection: DataSource

    beforeAll(async() => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Error during Data Source initialization", err)
        })
    })

    afterAll(async() => {
        await connection.destroy()
    })

    test("POST /customers - Deve ser capaz de criar um cliente", async() => {
        const response = await request(app).post("/customers").send(mockedCustomer)

        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name")
        expect(response.body).toHaveProperty("email")
        expect(response.body).toHaveProperty("phone")
        expect(response.body).toHaveProperty("date")
        expect(response.body).not.toHaveProperty("password")
        expect(response.status).toBe(201)
    })

    test("POST /customers - Não deve ser capaz de criar mais de um cliente com o mesmo email", async() => {
        const response = await request(app).post("/customers").send(mockedCustomer)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(400)
    })

    test("GET /customers - Deve ser capaz de listar os clientes", async() => {
        await request(app).post("/customers").send(mockedCustomer)
        const customerLoginResponse = await request(app).post("/login").send(mockedCustomerLogin)
        const response = await request(app).get("/customers").set("Authorization", `Bearer ${customerLoginResponse.body.token}`)

        expect(response.status).toBe(200)
    })

    test("GET /customers - Não deve ser capaz de listar os clientes sem autenticação",async () => {
        const response = await request(app).get('/customers')

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)        
    })

    test("PATCH /customers - Deve ser capaz de atualizar as informações do cliente", async () => {
        const newValues = {name: "NovoNome", email: "novoemail@email.com"}

        const customerLoginResponse = await request(app).post("/login").send(mockedCustomerLogin)
        const token = `Bearer ${customerLoginResponse.body.token}`

        const customerToBeUpdateRequest = await request(app).get("/customers").set("Authorization", token)
        const customerToBeUpdateId = customerToBeUpdateRequest.body[0].id

        const response = await request(app).patch(`/customers/${customerToBeUpdateId}`).set("Authorization", token).send(newValues)

        const customerUpdated = await request(app).get("/customers").set("Authorization", token)

        expect(response.status).toBe(200)
        expect(customerUpdated.body[0].name).toEqual("NovoNome")
        expect(customerUpdated.body[0]).not.toHaveProperty("password")
    })
})