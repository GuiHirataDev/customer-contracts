import { Request, Response } from "express"
import listCustomerService from "../../services/customers/listCustomer.service"
import { instanceToPlain } from "class-transformer"

const listCustomerController = async (req: Request, res: Response) => {
    const customers = await listCustomerService()

    return res.json(instanceToPlain(customers))
}

export default listCustomerController