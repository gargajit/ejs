import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// body parser middleware
app.use(bodyParser.urlencoded( { extended: true }));

// Static Middleware
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/home", (req, res) => {
    res.render("home.ejs", 
        { name: req.body["name"] }
    );
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`); 
});
