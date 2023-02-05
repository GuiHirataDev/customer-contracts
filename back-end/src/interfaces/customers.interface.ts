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

export interface ICustomerUpdateRequest {
  name?: string;
  email?: string;
  phone?: number;
  password?: string;
}

