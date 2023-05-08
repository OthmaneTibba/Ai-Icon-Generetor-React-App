const express = require("express");
const dotenv = require("dotenv");

const aiGeneretor = require("./routes/ai_generator");
const cors = require("cors");

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(aiGeneretor);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
