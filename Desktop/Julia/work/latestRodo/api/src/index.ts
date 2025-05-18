import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";
import { cors } from "@elysiajs/cors";
import { security } from "./security";
import connectMongoDB from "./database";
import startupCron from "./utils/cron";
import auth from "./routers/auth";
import chat from "./routers/chat";
import translateRouter from "./utils/translate";
await connectMongoDB();

const app = new Elysia()
  .use(
    cors({
      origin: [process.env.FRONT_END_URL!, "http://localhost:3000"],
      methods: "GET,POST",
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
  )
  .use(security)
  .use(
    swagger({
      path: "/docs",
      documentation: {
        info: {
          title: "Rodo Api",
          version: "1.0.0",
          description: "Rodo Api Documentation",
          contact: { email: "info@myrodo.com", name: "Rodo" },
        },
        tags: [
          { name: "Auth", description: "Auth Endpoints" },
          // { name: "User", description: "User Endpoints" },
          { name: "Utility", description: "Utility Endpoints" },
        ],
        components: {
          securitySchemes: {
            bearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
            },
          },
        },
      },
    })
  )
  .onError(({ code, error }) => {
    console.log(error, code);
    return {
      message: "Something went wrong",
      data: error,
      statusCode: code,
    };
  })
  .get("/", () => ({ message: "Success!! from api" }), {
    detail: { tags: ["Utility"] },
  })
  .ws("/ws", {
    open(ws) {
      console.log("🟢 WebSocket connected:", ws.id);
    },
    message(ws, { message }) {
      const { id } = ws.data.query;
      ws.send({
        id,
        message,
        time: new Date().toISOString(),
      });
    },
    close(ws) {
      console.log("🔴 WebSocket disconnected:", ws.id);
    },
  })
  .use(auth)
  .use(chat)
  .use(startupCron)
  .use(translateRouter)
  .listen(process.env.PORT || 3050);

console.log(`🚀 Elysia server running at http://localhost:${app.server?.port}`);
