export interface ICustomerRequest {
  name: string;
  email: string;
  phone: number;
  date: Date;
}

export interface ICustomerResponse extends ICustomerRequest{
    id: string;
}
