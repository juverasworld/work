import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";

dotenv.config();

 const authenticateToken = (req : Request, res: Response, next : NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Unauthorized" });

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.NEXTAUTH_SECRET || "", (err, decoded) => {
    if (err) return res.status(403).json({ error: "Forbidden" });
    req.user = decoded;
    next();
  });
};

export default authenticateToken;