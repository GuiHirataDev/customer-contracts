import { Request, Response } from "express"
import listCustomerService from "../../services/customers/listCustomer.service"

const listCustomerController = async (req: Request, res: Response) => {
    const customers = await listCustomerService()

    return res.json(customers)
}

export default listCustomerController