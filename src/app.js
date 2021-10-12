const express = require("express");
const path = require("path");
const app = express();
const hbs = require('hbs');
const port = 8000;

const static_path = path.join(__dirname ,"../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// using template engines
app.set('view engine', 'hbs');
// changing view to template 
app.set('views', template_path);

hbs.registerPartials(partials_path);


// this is for static web that use public directory
app.use(express.static(static_path));

app.get("/", (req, res)=> {
    res.render('index');
});

app.get("/about", (req, res)=> {
    res.render('about');
});

app.get("/weather", (req, res)=> {
    res.render('weather');
});

app.get("*", (req, res)=> {
    res.render('404error');
});

app.listen(port , () => {
    console.log(`listening to port ${port}`);
})