const express = require("express");
require("dotenv").config();
const app = express();

const routes = require("./routes");

//parse JSON bodies
app.use(express.json());

//Mount routs
app.use("/", routes);

//start the server
const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Server is running on port${port}`);
});
