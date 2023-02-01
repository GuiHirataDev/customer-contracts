import { Router } from "express";
import createContactsController from "../controllers/contacts/createContacts.controller";
import listContactController from "../controllers/contacts/listContacts.controller";

const contactsRoutes = Router()

contactsRoutes.post("", createContactsController)
contactsRoutes.get("", listContactController)

export default contactsRoutes