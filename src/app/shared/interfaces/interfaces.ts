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

export interface Playgrounds {
  id: number;
  title: string;
  cover: string;
  address: string;
  price: number;
  rating: number;
}

export interface Field {
  id: number;
  title: string;
  playgrounds: Playgrounds[];
}
