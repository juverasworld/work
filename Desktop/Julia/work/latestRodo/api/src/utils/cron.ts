import { Elysia } from "elysia";
import { cron, Patterns } from "@elysiajs/cron";
import User from "../models/user";
import ServerResponse from "./response";

const startupCron = new Elysia()
  .use(
    cron({
      name: "token-cleaner",
      pattern: Patterns.hourly(),
      run: async () => {
        console.log(
          `[${new Date().toISOString()}] Running token cleanup job...`
        );
        try {
          const result = await User.updateMany(
            { verificationTokenExpiresAt: { $lte: new Date() } },
            {
              $unset: {
                verificationToken: 1,
                verificationCode: 1,
                verificationTokenExpiresAt: 1,
              },
            }
          );

          console.log(
            `[${new Date().toISOString()}] Cleaned up ${
              result.modifiedCount
            } expired tokens.`
          );
        } catch (error) {
          console.error("❌ Error during token cleanup:", error);
        }
      },
    })
  )
  .group("/cron", (app) =>
    app
      .get(
        "/stop-cleanup",
        ({
          store: {
            cron: { "token-cleaner": cleanupJob },
          },
        }) => {
          cleanupJob.stop();
          return { success: true, message: "🛑 Token cleanup job stopped." };
        },
        {
          response: ServerResponse,
          detail:{
            tags: ['Utility']
          }
        }
      )
      .get(
        "/restart-cleanup",
        ({
          store: {
            cron: { "token-cleaner": cleanupJob },
          },
        }) => {
          cleanupJob.resume();
          return { success: true, message: "▶️ Token cleanup job started." };
        },
        {
          response: ServerResponse,
          detail:{
            tags: ['Utility']
          }
        }
      )
  );
export default startupCron;
