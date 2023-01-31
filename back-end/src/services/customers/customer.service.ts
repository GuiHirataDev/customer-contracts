import {
  ICustomerRequest,
  ICustomerResponse,
} from "../../interfaces/customers.interface";

const createCustumerService = ({
  name,
  email,
  phone,
  date,
}: ICustomerRequest): ICustomerResponse => {
  return {
    id: "213123",
    name,
    email,
    phone,
    date,
  };
};

export default createCustumerService;
