import { Request, Response } from "express";
import { IContactRequest } from "../../interfaces/contacts.interface";
import createContactsService from "../../services/contacts/createContacts.service";

const createContactsController = async (req: Request, res: Response) => {
    const contact: IContactRequest = req.body;
    const createdContact = await createContactsService(contact)
    return res.status(201).json(createdContact)
}

export default createContactsController