export interface ICustomerRequest {
  name: string;
  email: string;
  phone: number;
}

export interface ICustomerResponse extends ICustomerRequest{
    id: string;
    date: Date;
}

