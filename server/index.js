const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT | 3001; // process.env.PORT is stored in site where we deploy, 3000 is only for local development. So, this process.env is for development

const app = express(); //initialize express //like calling function

const uri =
  "mongodb+srv://seturaj110:test_123@cluster0.dinaq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



mongoose
  .connect(uri)
  .then(() => {
    console.log("Connection Successfull !");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, "0.0.0.0", () =>
  console.log(`connected at port 3001 ${PORT}`)
); //continously listen to server and listen
