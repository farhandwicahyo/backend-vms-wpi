BigInt.prototype.toJSON = function () {
  return this.toString();
};

require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const routes = require("./src/routes/index");
const corsOptions = {
  origin: "http://localhost:3001",
  httpOnly: false,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", routes);

// Tambahkan route untuk root path
app.get("/", (req, res) => {
  res.send("API sudah aktif bossss");
});

app.listen(port, () => {
  console.log(`Connecting on http://localhost:${port}`);
});
