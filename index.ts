const express = require("express");
// const dotenv = require("dotenv");
const port = process.env.PORT;
// dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));

import homeRoute from "./src/routes/homepage.ts"
import redirectRoute from "./src/routes/redirect.ts"
import submitRoute from "./src/routes/submit.ts"



app.use("/", homeRoute);
app.use("/r/", redirectRoute);
app.use("/submit", submitRoute);

app.listen(port, () => {
  console.log(`ShrinkURL app listening at http://localhost:${port}`);
});