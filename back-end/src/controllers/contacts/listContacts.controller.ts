import { Request, Response } from "express";
import listContactsService from "../../services/contacts/listContacts.service";

const listContactController = async (req: Request, res: Response) => {
    const contacts = await listContactsService()
    return res.json(contacts)
}

export default listContactController