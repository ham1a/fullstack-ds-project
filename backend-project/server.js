const express = require("express");
const app = express();
const todoRoutes = require("./api"); // path to your router

app.use(express.json()); // to read JSON body
app.use("/api", todoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
