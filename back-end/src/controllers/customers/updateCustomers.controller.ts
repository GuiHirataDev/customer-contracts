import { Request, Response } from "express";
import { ICustomerUpdateRequest } from "../../interfaces/customers.interface";
import updateCustomerService from "../../services/customers/updateCustomer.service";

const updateCustomerController = async (req: Request, res: Response) => {
  try {
    const customer: ICustomerUpdateRequest = req.body;
    const id: string = req.params.id;
    const updatedCustomer = await updateCustomerService(customer, id);
    return res.json(updatedCustomer);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default updateCustomerController;
