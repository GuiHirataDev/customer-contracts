import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customer.entity";

const listCustomerService = async (): Promise<Customer[]> => {
    const customerRepository = AppDataSource.getRepository(Customer)

    const customers = await customerRepository.find()

    return customers
}

export default listCustomerService