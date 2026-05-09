import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import donations from "./routes/donations.js";
import impact from "./routes/impact.js";
import contact from "./routes/contact.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/donations", donations);
app.use("/api/impact", impact);
app.use("/api/contact", contact);

app.get("/", (req,res)=>{
  res.send("ONG Backend Running");
});

app.listen(process.env.PORT || 3000);
