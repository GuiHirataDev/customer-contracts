import { Router } from "express";
import createCustumerController from "../controllers/customers/createCustomers.controller";
import listCustomerController from "../controllers/customers/listCustomers.controller";

const customerRoutes = Router();

customerRoutes.post("", createCustumerController);
customerRoutes.get("", listCustomerController);

export default customerRoutes;
