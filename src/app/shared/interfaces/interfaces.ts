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

export interface Token {
  authorization: string;
}

export interface UserInfo {
  balance: number;
  phone: any;
  email: string;
  name: string;
  surname: string
}

export interface Playgrounds {
  id: number;
  title: string;
  playgrounds: FieldsInfo
}

interface FieldsInfo {
  id: number;
  title: string;
  "cover": null,
  address: string;
  price: number;
  rating: number;
}

export interface ReviewInfo {
  playground: number;
  text: string;
  rating: number;
}
