import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customer.entity"
import { ICustomerRequest } from "../../interfaces/customers.interface";
import { AppError } from "../../errors/appError";

const createCustumerService = async ({name, email, phone}: ICustomerRequest): Promise<Customer> => {
    const customerRepository = AppDataSource.getRepository(Customer)

    const customer = customerRepository.create({
      name,
      email,
      phone
    })

    await customerRepository.save(customer)

    return customer
};

export default createCustumerService;
