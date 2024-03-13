import { regularExps } from "../../../config";

export class RegisterUserDto {
  private constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}

  static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { name, email, password } = object;

    if (!name) return ["Name is required"];
    if (!email) return ["Email is required"];
    if (!regularExps.email.test(email)) return ["Email is not valid"];
    if (!password) return ["Password is required"];
    if (password.length < 6)
      return ["The password must contain at least 6 characters"];

    return [undefined, new RegisterUserDto(name, email, password)];
  }
}
