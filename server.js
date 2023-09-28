const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => {
  console.log(`Hi guys this server is running on port ${PORT}`);
});
