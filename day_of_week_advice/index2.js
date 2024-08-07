import express from 'express';

const app = express();
const port = 3000;

var today = new Date();
// var today = new Date("August 10, 2024 10:00:00");        // weekend date

var dayOfWeek = today.getDay();

let type = "a weekday";
let adv = "it's time to work hard.";

if (dayOfWeek === 0 || dayOfWeek === 6) {
    type = "the weekend";
    adv = "it's time to have fun."
}

app.get("/", (req, res) => {
    res.render("index2.ejs", {
        dayType: type,
        advice: adv
    });
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
    
});
