import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customer.entity";
import { AppError } from "../../errors/appError";

const deleteCustomerService = async (id: string): Promise<void> => {
  const customerRepository = AppDataSource.getRepository(Customer);

  const customer = await customerRepository.findOneBy({
    id,
  });

  if (!customer) {
    throw new AppError("Customer not found", 404);
  }

  await customerRepository.delete(id);
};

export default deleteCustomerService;
