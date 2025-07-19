const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // parse JSON body

app.post("/submit", (req, res) => {
  console.log("Received form data:", req.body);
  res.json({ message: "Form received successfully ✅" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
