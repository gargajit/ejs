import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", 
    { mainHeading: "Enter your name below 👇" }
  );
});

app.post("/", (req, res) => {
  var nameLength = req.body["fName"].length + req.body["lName"].length;
  
  res.render("index.ejs", 
    { mainHeading: `There are ${nameLength} letters in your name.` }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
