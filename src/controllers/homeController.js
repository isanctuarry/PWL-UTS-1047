import { render } from "../config/viewEngine.js";

export const home = async (c) => {
  const html = await render("home", {
    title: "Dashboard Bun MVC",
    message: "Hello dari Bun + Tailwind 🚀",
  }, c);
  return c.html(html);
};