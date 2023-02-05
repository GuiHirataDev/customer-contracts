import { Request, Response } from "express";
import deleteContactService from "../../services/contacts/deleteContact.service";

const deleteContactController = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    await deleteContactService(id);
    return res.status(204).send();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default deleteContactController;
