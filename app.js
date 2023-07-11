
const express = require("express");
require("dotenv/config");
const sequelize_db = require("../quotation-extension/src/config/dbconfig.js");



const app = express();
const port = process.env.PORT || 4000;

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  console.log("my quotation extension app loaded .....");
  res.send("Welcome to my quotation extension app");
});






//db connection test:
sequelize_db
  .authenticate()
  .then((res) => {
    console.log(
      `Connection has been established successfully with ${JSON.stringify(res)}`
    );
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

  sequelize_db.sync({alter: true})
  .then((data) =>{`console.log(${(data)}`})
  .catch((error) => {console.log(error)});


  //reading port test:
app.listen(port, () =>
  console.log(`app is running on port: http://localhost:${port}`)
);
