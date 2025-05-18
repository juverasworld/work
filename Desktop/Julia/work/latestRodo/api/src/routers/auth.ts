import Elysia, { t } from "elysia";
import User from "../models/user";
import jwt from "@elysiajs/jwt";
import { sendVerificationMail } from "../utils/mail";
import ServerResponse from "../utils/response";
import { hash, compare } from "bcryptjs";

const auth = new Elysia({ prefix: "/auth" })
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET!,
      exp: "1d",
    })
  )
  .post(
    "/signup",
    async ({ body, jwt: { sign } }) => {
      const { name, email, password, phone, role } = body;
      const hashedPassword = await hash(password, 12);
      try {
        const token = await sign({ email });
        const code = String(Math.floor(1000 + Math.random() * 9000));
        const user = await User.create({
          name,
          email,
          phone,
          password: hashedPassword,
          role,
          verificationToken: token,
          verificationCode: code,
          verificationTokenExpiresAt: Date.now() + 3600000,
        });
        sendVerificationMail(email, name, token, code);
        return {
          success: true,
          message: "User registered successfully",
          data: {
            id: String(user._id),
            name: user.name,
            email: user.email,
            role: user.role,
          },
        };
      } catch (error) {
        if (error.code == "11000") {
          if (error.keyPattern.email) {
            return {
              message: `Email ${error.keyValue.email} is already in use`,
            };
          } else {
            return {
              message: `Phone number ${error.keyValue.phone} is already in use`,
            };
          }
        }
        return {
          message: "An error occurred while registering the user" + error,
        };
      }
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String({ format: "email" }),
        password: t.String(),
        phone: t.String(),
        role: t.String({
          enum: ["client", "professional", "organization", "admin"],
        }),
      }),
      response: ServerResponse,
      detail: {
        tags: ["Auth"],
        description: "Register a new user, also sends a verification email",
      },
    }
  )
  .post(
    "/login",
    async ({ body, jwt: { sign } }) => {
      const { email, password } = body;
      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return {
          message: "Invalid email or unregistered user",
        };
      }

      const isMatch = await compare(password, user.password!);
      if (!isMatch) {
        return {
          message: "Invalid password",
        };
      }

      const token = await sign({
        email: user.email,
        name: user.name as string,
      });

      return {
        success: true,
        message: "Login successful",
        data: {
          token,
          user: {
            name: user.name,
            email: user.email,
            role: user.role,
          },
        },
      };
    },
    {
      body: t.Object({
        email: t.String({ format: "email", required: true }),
        password: t.String(),
      }),
      response: ServerResponse,
      detail: {
        tags: ["Auth"],
        description: "Login to the application"
      },
    }
  )
  .post(
    "/send-verification-email",
    async ({ body, jwt: { sign } }) => {
      const { email } = body;
      const user = await User.findOne({ email });
      if (!user) {
        return { message: "User not found" };
      }
      if (user.isEmailVerified) {
        return { message: "Email already verified" };
      }
      const token = await sign({ email });
      const code = Math.floor(1000 + Math.random() * 9000).toString();
      user.verificationCode = code;
      user.verificationToken = token;
      user.verificationTokenExpiresAt = new Date(Date.now() + 3600000);
      await user.save();
      const success = await sendVerificationMail(
        email,
        user.name as string,
        token,
        code
      );
      if (success) {
        return { message: "Verification email sent" };
      } else {
        return { message: "Failed to send verification email" };
      }
    },
    {
      body: t.Object({
        email: t.String(),
      }),
      response: ServerResponse,
      detail: {
        tags: ["Auth"],
        description: "Send verification email to existing user, only if not verified"
      },
    }
  )
  .post(
    "/verify-email",
    async ({ body }) => {
      const { token } = body;
      const user = await User.findOne({
        $or: [{ verificationToken: token }, { verificationCode: token }],
      });
      if (!user) {
        return { message: "Invalid verification token" };
      }
      if (user.isEmailVerified) {
        return { message: "Email already verified" };
      }
      if (!user.verificationTokenExpiresAt) {
        return { message: "Verification token expired" };
      }
      if (user.verificationTokenExpiresAt < new Date()) {
        user.verificationCode = undefined;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
        return { message: "Verification token expired" };
      }
      user.isEmailVerified = true;
      user.verificationCode = undefined;
      user.verificationToken = undefined;
      user.verificationTokenExpiresAt = undefined;
      await user.save();
      return { message: "User email verified successfully", success: true };
    },
    {
      body: t.Object({
        token: t.String(),
      }),
      response: ServerResponse,
      detail: {
        tags: ["Auth"],
      },
    }
  );

export default auth;
