import { Router } from "express";
import createContactsController from "../controllers/contacts/createContacts.controller";
import deleteContactController from "../controllers/contacts/deleteContacts.controller";
import listContactController from "../controllers/contacts/listContacts.controller";
import updateContactController from "../controllers/contacts/updateContacts.controller";
import authenticationMiddleware from "../middlewares/authentication.middleware";

const contactsRoutes = Router()

contactsRoutes.post("", authenticationMiddleware,  createContactsController)
contactsRoutes.get("", authenticationMiddleware,  listContactController)
contactsRoutes.patch("/:id", authenticationMiddleware, updateContactController)
contactsRoutes.delete("/:id", authenticationMiddleware, deleteContactController)

export default contactsRoutes