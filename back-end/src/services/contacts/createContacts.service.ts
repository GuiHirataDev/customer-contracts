import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { Customer } from "../../entities/customer.entity";
import { AppError } from "../../errors/appError";
import { IContactRequest } from "../../interfaces/contacts.interface";

const createContactsService = async ({email_customer, name, email, phone}: IContactRequest): Promise<Contact> => {
    const customerRepository = AppDataSource.getRepository(Customer)
    const contactRepository = AppDataSource.getRepository(Contact)

    const customer = await customerRepository.findOneBy({
        email: email_customer
    })

    if(!customer) {
        throw new AppError("Customer not found", 404)
    }

    const contact = contactRepository.create({
        name, 
        email,
        phone,
        customer
    })

    await contactRepository.save(contact)

    return contact
}

export default createContactsService