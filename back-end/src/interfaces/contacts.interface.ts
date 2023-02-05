export interface IContactRequest {
  name: string;
  email: string;
  phone: number;
}

export interface IContactUpdateRequest {
  name?: string;
  email?: string;
  phone?: number;
}
