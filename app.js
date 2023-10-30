const express = require("express");
const mongoose = require("mongoose");

const taskRoutes = require("./routes/task");
const bookRoutes = require("./routes/book");
const userRoutes = require("./routes/user");

mongoose
  .connect(
    "mongodb+srv://maherturki25:MFcgsC8G95A8j6YE@cluster0.i5peusc.mongodb.net/backend",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connection to MongoDB successful!"))
  .catch((e) => console.log("Connection to MongoDB failed!", e));

const app = express();

app.use(express.json());



app.use("/api/auth", userRoutes);
app.use("/api/tasks", taskRoutes); 
app.use("/api/books", bookRoutes);

app.use(express.json()); 

module.exports = app;
