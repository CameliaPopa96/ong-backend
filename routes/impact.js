import express from "express";

const router = express.Router();

router.get("/", (req,res)=>{

  res.json({
    patients: 523,
    donations: 189320
  });

});

export default router;
