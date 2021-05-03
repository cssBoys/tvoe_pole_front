export interface User {
  phone: any,
  password: string
}

export interface UserRegistration {
  email: string,
  password: string,
  phone: any,
  name: string,
  surname: string
}

export interface Code {
  id: number,
  code: string
}

export interface Result {
  id: number;
  title: string;
  cover: string;
  address: string;
  price: number;
  rating: number;
}

export interface Field {
  count: number;
  next?: any;
  previous?: any;
  results: Result[];
}
