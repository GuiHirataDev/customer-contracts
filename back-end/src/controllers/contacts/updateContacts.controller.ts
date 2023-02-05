import { Request, Response } from "express";
import { IContactRequest } from "../../interfaces/contacts.interface";
import updateContactService from "../../services/contacts/updateContacts.service";

const updateContactController = async (req: Request, res: Response) => {
  try {
    const contact: IContactRequest = req.body;
    const id: string = req.params.id;
    const updatedContact = await updateContactService(contact, id);
    return res.json(updatedContact);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default updateContactController;
