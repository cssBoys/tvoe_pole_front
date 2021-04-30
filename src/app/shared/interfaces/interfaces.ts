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
