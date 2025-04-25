import { Schema, Document, Model, Types, model } from "mongoose";

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface IUser extends Document {
  email: string;
  name: string;
  phone: string;
  isEmailVerified: boolean;
  isMobileVerified: boolean;
  role: UserRole;
  provider: string;
  password?: string;
  image?: string;
  providerId?: string;
  otp?: string;
  otpExpiry?: Date;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    password: { type: String},
    isEmailVerified: { type: Boolean, default: false },
    phone: { type: String, unique: true },
    isMobileVerified: { type: Boolean, default: false },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
    },
    provider: { type: String, default: "credential" },
    providerId: { type: String, default: "local" },
    otp: { type: String },
    otpExpiry: { type: Date },
    lastLogin: { type: Date },
    image: { type: String },
  },
  { timestamps: true }
);

const User: Model<IUser> = model<IUser>("User", UserSchema);

export default User;
