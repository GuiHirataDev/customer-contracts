import { hash } from "bcrypt"
import { AppDataSource } from "../../data-source"
import { Customer } from "../../entities/customer.entity"
import { AppError } from "../../errors/appError"
import { ICustomerUpdateRequest } from "../../interfaces/customers.interface"

const updateCustomerService = async ({ name, email, phone, password }: ICustomerUpdateRequest, id: string) => {
    const customerRepository = AppDataSource.getRepository(Customer)

    const findCustomer = await customerRepository.findOneBy({
        id
    })

    if(!findCustomer){
        throw new AppError("Customer not found", 404)
    }

    await customerRepository.update(
        id,
        {
            name: name ? name : findCustomer.name,
            email: email ? email : findCustomer.email,
            phone: phone ? phone :
            findCustomer.phone,
            password: password ? await hash(password, 10) : findCustomer.password
        }
    )

    const customer = await customerRepository.findOneBy({
        id
    })

    return customer
}

export default updateCustomerService