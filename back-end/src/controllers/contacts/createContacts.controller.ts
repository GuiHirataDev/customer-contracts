import { Request, Response } from "express";
import { IContactRequest } from "../../interfaces/contacts.interface";
import createContactsService from "../../services/contacts/createContacts.service";

const createContactsController = async (req: Request, res: Response) => {
  try {
    const contact: IContactRequest = req.body;
    const id = req.customer.id;
    const createdContact = await createContactsService(contact, id);
    return res.status(201).json(createdContact);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default createContactsController;
