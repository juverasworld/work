import { Request } from "express";
import jwt from "jsonwebtoken";

declare module "express-serve-static-core" {
  interface Request {
    user?: string | jwt.JwtPayload; // Adjust type based on your decoded JWT payload
  }
}
