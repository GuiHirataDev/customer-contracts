import { Router } from "express";
import createCustumerController from "../controllers/customers/createCustomers.controller";
import deleteCustomerController from "../controllers/customers/deleteCustomers.controller";
import listCustomerController from "../controllers/customers/listCustomers.controller";
import updateCustomerController from "../controllers/customers/updateCustomers.controller";
import authenticationMiddleware from "../middlewares/authentication.middleware";

const customerRoutes = Router();

customerRoutes.post("", createCustumerController);
customerRoutes.get("", authenticationMiddleware, listCustomerController);
customerRoutes.patch(
  "/:id",
  authenticationMiddleware,
  updateCustomerController
);
customerRoutes.delete(
  "/:id",
  authenticationMiddleware,
  deleteCustomerController
);

export default customerRoutes;
