import { Request, Response } from "express";
import deleteCustomerService from "../../services/customers/deleteCustomer.service";

const deleteCustomerController = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    await deleteCustomerService(id);
    return res.status(204).send();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default deleteCustomerController;
