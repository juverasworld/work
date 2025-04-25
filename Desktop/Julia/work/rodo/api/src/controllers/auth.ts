import { Request, Response } from "express";
import User from "../models/user";
import { hash, compare } from "bcryptjs";
export const signup = async (req: Request, res: Response) => {
  const { email, phone, firstName, lastName, password } = req.body;
  console.log(req.body);

  const name = `${firstName} ${lastName}`;
  try {
    const hashedPassword = await hash(password, 10);
    const newUser = await User.create({
      email,
      phone,
      name,
      password: hashedPassword,
    });
    res.status(200).json({
      message: "User created successfully",
      success: true,
      data: newUser,
    });
  } catch (err: any) {
    if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
      res.status(400).json({
        message: "Email already in use",
        success: false,
        data: null,
      });
      return;
    }
    if (err.code === 11000 && err.keyPattern && err.keyPattern.phone) {
      res.status(400).json({
        message: "Phone number already in use",
        success: false,
        data: null,
      });
      return;
    }
    res.status(400).json({
      message: "User creation failed, Database error occured",
      success: false,
      data: null,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        message: "User not found",
        success: false,
        data: null,
      });
      return;
    }
    if (!user.password) throw new Error("Password not set, Set a password or signin another way");
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      res.status(400).json({
        message: "Invalid password",
        success: false,
        data: null,
      });
      return;
    }
    const { password: _password, ...userWithoutPassword } = user.toObject();
    res.status(200).json({
      message: "Login successful",
      success: true,
      data: userWithoutPassword,
    });
  } catch (err) {
    res.status(400).json({
      message: "Login failed, Database error occured",
      success: false,
      data: null,
    });
  }
};

export const googleSignin = async (req: Request, res: Response) => {
  const { email, name, googleId } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      const newUser = await User.create({
        name,
        email,
        provider: "google",
        providerId: googleId,
        isEmailVerified: true,
      });
      res.status(200).json({
        message: "Login successful",
        success: true,
        data: newUser,
      });
      return;
    }
    res.status(200).json({
      message: "Login successful",
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: "Login failed, Database error occured",
      success: false,
      data: null,
    });
  }
};
