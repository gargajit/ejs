import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    res.render("index.ejs", 
        { name: req.body["name"] }
    );
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);    
});