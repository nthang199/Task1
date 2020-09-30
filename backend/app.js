const express = require("express");
require("dotenv").config();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "CONTACT",
});

db.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Mysql connected...");
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/contactCustomer", (req, res) => {
  let sql = "SELECT * FROM CONTACTCUSTOMER";
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/contactCustomer", (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nguyenhang04141997@gmail.com", // TODO: your gmail account
      pass: "144Hang1997",
    },
  });

  let mailOptionsCustomer = {
    from: '"Beauty Cosmetic Contact" <nguyenhang04141997@gmail.com>',
    to: "hang75561@nuce.edu.vn",
    subject: "Beauty Cosmetic",
    text: "Thank you for contacting us !",
  };
  transporter.sendMail(mailOptionsCustomer, (error, data) => {
    if (error) {
      return console.log("Error !!", error);
    } else {
      console.log("Email sent !");
    }
    res.send("Contact");
  });

  let mailOptionsCompany = {
    from: '"Beauty Cosmetic Contact" <nguyenhang04141997@gmail.com>',
    to: "nguyenhang04141997@gmail.com",
    subject: "Customer contact",
    text: "Có khách hàng ghé thăm website. ",
  };
  transporter.sendMail(mailOptionsCompany, (error, data) => {
    if (error) {
      return console.log("Error !!", error);
    } else {
      console.log("Email sent !");
    }
  });

  console.log(req.body);
  let data = req.body;
  console.log(data);
  let sql = "INSERT INTO CONTACTCUSTOMER SET ?";
  let query = db.query(sql, data, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
app.get("/send", (req, res) => {
  console.log();
});
app.listen(80, () => console.log("Server started ..."));
