const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");
const allRoutes = require("./routes");
const PORT = process.env.PORT || 3000;

db.then(() => {
  console.log("Berhasil connect database MongoDB");
}).catch(() => {
  console.log("gagal connect ke database MongoDB");
});

app.use(cors());
app.use(express.json());
app.use(allRoutes);
app.listen(PORT, () => {
  console.log(`Server Running PORT ${PORT}`);
});
