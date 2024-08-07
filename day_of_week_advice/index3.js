import express from 'express';
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var today = new Date();
// var today = new Date("August 10, 2024 10:00:00");        // weekend date

var dayOfWeek = today.getDay();

let type = "a weekday";
let adv = "it's time to work hard.";

if (dayOfWeek === 0 || dayOfWeek === 6) {
    type = "the weekend";
    adv = "it's time to have fun."
}

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/advice", (req, res) => {
    res.render("index3.ejs", {
        name: req.body["name"],
        dayType: type,
        advice: adv
    });
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
    
});
