const express = require("express");
const app = express();
app.use(express.json());

// database
const db = require("./config/database");

// test db
db.authenticate()
  .then(() => console.log("Database connected!!!"))
  .catch((err) => console.log("Error!", err));

app.get("/", (req, res) => {
  res.send("Index");
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
