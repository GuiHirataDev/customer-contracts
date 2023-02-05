import { IContactRequest } from "../../interfaces/contacts.interface";
import { ICustomerRequest } from "../../interfaces/customers.interface";
import { ISessionRequest } from "../../interfaces/sessions.interface";

export const mockedCustomer: ICustomerRequest = {
  name: "Carlos",
  email: "carlos@email.com",
  password: "12345",
  phone: 22224444,
};

export const mockedCustomerLogin: ISessionRequest = {
  email: "carlos@email.com",
  password: "12345",
};

export const mockedContact: IContactRequest = {
  email: "contact@email.com",
  name: "contact",
  phone: 55554444,
};
