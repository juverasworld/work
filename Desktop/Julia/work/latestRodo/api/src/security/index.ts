import { Elysia } from "elysia";
import { appendFileSync } from "fs";
export const security = new Elysia()
  // Helmet-like headers manually
  .onRequest(({ set }) => {
    set.headers["X-DNS-Prefetch-Control"] = "off";
    set.headers["X-Frame-Options"] = "SAMEORIGIN";
    set.headers["Strict-Transport-Security"] =
      "max-age=5184000; includeSubDomains";
    set.headers["X-Download-Options"] = "noopen";
    set.headers["X-Content-Type-Options"] = "nosniff";
    set.headers["X-Permitted-Cross-Domain-Policies"] = "none";
    set.headers["Referrer-Policy"] = "no-referrer";
  })

  // Logger (like morgan)
  .onRequest(({ request }) => {
    const logLine = `[${new Date().toISOString()}] ${request.method} ${
      request.url
    }\n`;

    if (process.env.NODE_ENV === "development") {
      console.log(logLine.trim());
    } else {
      appendFileSync("access.log", logLine);
    }
  });
