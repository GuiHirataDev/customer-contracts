import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customer.entity"
import { ICustomerRequest } from "../../interfaces/customers.interface";
import { hash } from "bcrypt";

const createCustumerService = async ({name, email, password, phone}: ICustomerRequest): Promise<Customer> => {
    const customerRepository = AppDataSource.getRepository(Customer)

    const hashedPassword = await hash(password, 10)

    const customer = customerRepository.create({
      name,
      email,
      password: hashedPassword,
      phone
    })

    await customerRepository.save(customer)

    return customer
};

export default createCustumerService;
