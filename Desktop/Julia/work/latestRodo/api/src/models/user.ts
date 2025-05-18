import { Schema, model, Document, Model } from "mongoose";

export enum UserRole {
  CLIENT = "client",
  PROFESSIONAL = "professional",
  ORGANIZATION = "organization",
  ADMIN = "admin",
}

export enum UserGender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

// Use Document for Mongoose document methods
export interface IUser extends Document {
  email: string;
  username: string;
  googleId?: string;
  profilePicture?: string;
  password?: string;
  phone?: string;
  gender: UserGender;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  name?: string;
  role: UserRole;
  birthday?: Date;
  verificationToken?: string;
  verificationCode?: string;
  verificationTokenExpiresAt?: Date;
  address?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const UserSchema = new Schema(
  {
    name: String,
    username: {
      type: String,
    },
    gender: {
      type: String,
      enum: Object.values(UserGender),
      default: UserGender.OTHER,
    },
    email: {
      type: String,
      unique: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Please enter a valid email"],
      required: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      unique: true,
    },
    isPhoneVerified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      select: false,
    },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.CLIENT,
    },
    birthday: Date,
    googleId: String,
    profilePicture: String,
    address: String,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
    verificationCode: String,
  },
  {
    timestamps: true,
  }
);

UserSchema.pre<IUser>("save", function (next) {
  if (
    this.verificationTokenExpiresAt &&
    this.verificationTokenExpiresAt < new Date()
  ) {
    this.verificationToken = undefined;
    this.verificationCode = undefined;
    this.verificationTokenExpiresAt = undefined;
  }
  next();
});

const User: Model<IUser> = model<IUser>("User", UserSchema);
export default User;
