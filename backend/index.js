const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const otpRoutes = require("./Routes/otpRoute");
const customerRoutes = require("./Routes/customerRoute");
const whatsappRoutes = require("./Routes/whatsappRoute");
var cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const PORT = process.env.PORT;
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

// connect to DB
try {
  mongoose.connect(process.env.MongoDb_Url);
  console.log("connected to mongoDB");
} catch (err) {
  console.log(err);
}
// setup routes
app.use("/v1/api", otpRoutes);
app.use("/v1/api", customerRoutes);
app.use("/v1/api", whatsappRoutes);

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`server started on port :${PORT}`);
});
