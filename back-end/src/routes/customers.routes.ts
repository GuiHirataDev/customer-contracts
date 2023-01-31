import { Router } from "express";
import createCustumerController from "../controllers/customers/customers.controller";

const customerRoutes = Router();

customerRoutes.post("", createCustumerController);

export default customerRoutes;
