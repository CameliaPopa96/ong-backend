import express from "express";
import { stripe } from "../config/stripe.js";

const router = express.Router();

router.post("/checkout", async (req,res)=>{

  const { amount } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    mode:"payment",
    line_items:[{
      price_data:{
        currency:"ron",
        product_data:{ name:"Donație ONG Aiud" },
        unit_amount: amount * 100
      },
      quantity:1
    }],
    success_url: process.env.FRONTEND_URL,
    cancel_url: process.env.FRONTEND_URL
  });

  res.json({ url: session.url });
});

export default router;
