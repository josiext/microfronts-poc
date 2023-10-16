const express = require("express");
var proxy = require("express-http-proxy");

const app = express();

app.use("/proxy", proxy("./public2"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
