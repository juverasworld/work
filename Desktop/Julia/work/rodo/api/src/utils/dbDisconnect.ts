import { NextFunction, Request, Response } from "express";
import { disconnect } from "mongoose";

export default (req: Request, res: Response, next: NextFunction) => {
  res.on("finish", async () => {
    try {
      await disconnect();
      console.log("🔌 MongoDB disconnected after response.");
    } catch (err) {
      console.error("Error disconnecting from MongoDB:", err);
    }
  });
  next();
};
