import { connection, connect, Mongoose } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  console.error("❌ DATABASE_URL is not defined in the environment variables.");
  process.exit(1);
}
let cachedConnection: Mongoose | null = null;
// Function to connect to MongoDB database
const connectDB = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }
  try {
    cachedConnection = await connect(DATABASE_URL as string);
    console.log("✅ MongoDB Connected Successfully");
    return cachedConnection;
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

// Handle Connection Events
connection.on("connected", () => {
  console.log("🔗 Mongoose connected to MongoDB.");
});

connection.on("error", (err) => {
  console.error("⚠️ Mongoose connection error:", err);
});

connection.on("disconnected", () => {
  console.warn("⚠️ Mongoose disconnected.");
});

// Graceful Shutdown on Process Exit
process.on("SIGINT", async () => {
  await connection.close();
  console.log("🔌 MongoDB connection closed due to app termination.");
  process.exit(0);
});

export default connectDB;
