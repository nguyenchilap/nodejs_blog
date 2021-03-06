const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

//USE
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

//template Engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));

app.set('view engine', 'hbs'); //set view engine = handlebars
app.set('views', path.join(__dirname, 'resources/views'));

// Route init
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})