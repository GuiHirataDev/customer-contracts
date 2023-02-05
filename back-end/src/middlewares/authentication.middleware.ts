import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config"

const authenticationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Token inválido",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: "Token inválido",
      });
    }

    req.customer = {
      id: decoded?.sub,
    };

    next();
  });
};

export default authenticationMiddleware;
