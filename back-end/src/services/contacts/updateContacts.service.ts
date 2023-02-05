import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { IContactUpdateRequest } from "../../interfaces/contacts.interface";
import { AppError } from "../../errors/appError";

const updateContactService = async (
  { email, name, phone }: IContactUpdateRequest,
  id: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOneBy({
    id,
  });

  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }

  await contactRepository.update(id, {
    email: email ? email : findContact.email,
    name: name ? name : findContact.name,
    phone: phone ? phone : findContact.phone,
  });

  const contact = await contactRepository.findOneBy({
    id,
  });

  return contact;
};

export default updateContactService;
