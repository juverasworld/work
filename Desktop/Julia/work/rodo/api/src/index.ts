import express, { Response, Request } from "express";
import security from "./security";
import dotenv from "dotenv";
import connectDB from "./utils/database";
import dbDisconnect from "./utils/dbDisconnect";
import authRouter from "./routes/auth";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3050;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
security(app);
connectDB();
app.use("/auth", authRouter);

app.use(dbDisconnect);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Selltana API !!!");
});

app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}`);
});