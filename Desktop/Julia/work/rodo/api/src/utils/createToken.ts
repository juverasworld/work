import jwt from "jsonwebtoken";

function createVerificationToken(email: string) {
  return jwt.sign({ email }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
}

export const decodeVerificationToken = (token: string) =>{
  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  if (decoded instanceof Error) {
    throw new Error("Invalid token");
  }
  return decoded;
}

export default createVerificationToken;
