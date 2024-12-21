import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/", (req, res) => {
  const first = req.body["fName"].trim();
  const last = req.body["lName"].trim();
  var numOfChar = first.length + last.length;
  res.render("index.ejs", {
    nameLength: numOfChar,
    customHeader: `There are ${numOfChar} characters in your name.`
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
