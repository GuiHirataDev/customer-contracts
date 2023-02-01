import { Request, Response } from "express";
import { ICustomerRequest } from "../../interfaces/customers.interface";
import createCustumerService from "../../services/customers/createCustomer.service";

const createCustumerController = async (req: Request, res: Response) => {
  try {
    const custumer: ICustomerRequest = req.body;
    const createdCustomer = await createCustumerService(custumer);
    return res.json(createdCustomer);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default createCustumerController;
