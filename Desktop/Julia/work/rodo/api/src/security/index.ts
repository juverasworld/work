import cors, { CorsOptions } from "cors";
import helmet from "helmet";
import morgan from "morgan";
import fs from "node:fs";
import path from "node:path";
import { Express } from "express";
import { config } from "dotenv";

config();
console.log(process.env.NEXT_URI);

const corsOptions: CorsOptions = {
  origin: [process.env.NEXT_URI!],
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

export default function security(app: Express) {
  app.use(cors(corsOptions));
  app.use(helmet());
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  } else {
    const logDir = path.join(__dirname, "../logs");
    fs.existsSync(logDir) || fs.mkdirSync(logDir);
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const accessLogStream = fs.createWriteStream(
      path.join(logDir, `${year}-${month}-${day}-server.log`),
      { flags: "a" }
    );
    app.use(morgan("combined", { stream: accessLogStream }));
  }
}
