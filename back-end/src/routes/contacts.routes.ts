import { Router } from "express";
import createContactsController from "../controllers/contacts/createContacts.controller";
import listContactController from "../controllers/contacts/listContacts.controller";
import authenticationMiddleware from "../middlewares/authentication.middleware";

const contactsRoutes = Router()

contactsRoutes.post("", authenticationMiddleware,  createContactsController)
contactsRoutes.get("", authenticationMiddleware,  listContactController)

export default contactsRoutes