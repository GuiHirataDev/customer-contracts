import { Router } from "express";
import createCustumerController from "../controllers/customers/createCustomers.controller";
import listCustomerController from "../controllers/customers/listCustomers.controller";
import authenticationMiddleware from "../middlewares/authentication.middleware";

const customerRoutes = Router();

customerRoutes.post("", createCustumerController);
customerRoutes.get("", authenticationMiddleware, listCustomerController);

export default customerRoutes;
