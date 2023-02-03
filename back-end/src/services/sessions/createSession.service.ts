import { ISessionRequest } from "../../interfaces/sessions.interface";
import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customer.entity";
import { AppError } from "../../errors/appError";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config"

const createSessionService = async ({
  email,
  password,
}: ISessionRequest): Promise<string> => {
  const customerRepository = AppDataSource.getRepository(Customer);

  const customer = await customerRepository.findOneBy({
    email: email,
  });

  if (!customer) {
    throw new AppError("Usuário ou senha inválidos", 401);
  }

  const passwordMatch = await compare(password, customer.password);

  if (!passwordMatch) {
    throw new AppError("Usuário ou senha inválida", 401);
  }

  const token = jwt.sign({}, "32121assad", {
    expiresIn: "24h",
    subject: customer.id,
  });

  return token
};

export default createSessionService;
