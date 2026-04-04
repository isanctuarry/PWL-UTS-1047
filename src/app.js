import { Hono } from "hono";
import router from "./routes/web.js";
import { serveStatic } from "hono/bun";

const app = new Hono();

// Middleware set currentPath
app.use("*", async (c, next) => {
  c.set("currentPath", c.req.path);
  await next();
});

// Static files (CSS)
app.use("/css/*", serveStatic({ root: "./src/public" }));

// Routes
app.route("/", router);

export default {
  port: 3000,
  fetch: app.fetch,
};