import { render } from "../config/viewEngine";
import * as model from "../models/mahasiswaModel";

export const home = async (c) => {
  const data = await model.getAll(); 
  
  return c.html(
    await render("home", {
      title: "Dashboard",
      mahasiswa: data, 
    }, c)
  );
};