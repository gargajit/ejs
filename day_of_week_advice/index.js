import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

var today = new Date();
// var today = new Date("August 10, 2024 10:00:00");        // weekend date

var dayOfWeek = today.getDay();

app.get('/', (req,res) => {
    var week = "";
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        week = "the weekend, it's time to have fun!";
    }
    else {
        week = "a weekday, it's time to work hard!";
    }
    res.render("index.ejs",
        {weekType: week }
    );
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
