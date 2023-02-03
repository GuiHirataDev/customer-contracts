export interface ICustomerRequest {
  name: string;
  email: string;
  phone: number;
  password: string;
}

export interface ICustomerResponse extends ICustomerRequest{
    id: string;
    date: Date;
}

