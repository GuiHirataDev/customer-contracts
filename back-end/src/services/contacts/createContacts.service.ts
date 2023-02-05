import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { Customer } from "../../entities/customer.entity";
import { AppError } from "../../errors/appError";
import { IContactRequest } from "../../interfaces/contacts.interface";

const createContactsService = async (
  { name, email, phone }: IContactRequest,
  id: string
): Promise<Contact> => {
  const customerRepository = AppDataSource.getRepository(Customer);
  const contactRepository = AppDataSource.getRepository(Contact);

  const customer = await customerRepository.findOneBy({
    id,
  });

  if (!customer) {
    throw new AppError("Cliente não encontrado", 404);
  }

  const contact = contactRepository.create({
    name,
    email,
    phone,
    customer,
  });

  await contactRepository.save(contact);

  return contact;
};

export default createContactsService;
