const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./config/db");
const user = require("./routes/user");
const auth = require("./routes/auth");

connectDb();

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", user);
app.use("/api/v1/auth", auth);

const port =  4000;
app.listen(port, () => console.log(`active on ${port}`));
