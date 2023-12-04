const express = require("express");
const app = express();
const PORT = 6000;
const connectDB = require("./database/db");

app.use(express.json());

//Connecting the Database
connectDB();

app.use("/api", require("./routes/user"));
app.use("/api", require("./routes/routes"));

app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`));
