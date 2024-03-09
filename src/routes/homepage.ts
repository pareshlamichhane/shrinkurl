const express = require("express");

const router = express.Router();

import HomePage from "../pages/home"

router.get("/", (req: any, res: any) => {
  res.send(HomePage);
});

export default router;