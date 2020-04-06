require('./config/db');
const indexRouter = require('./routes/index.router');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/api',indexRouter);

app.get('/', function(request, response) {
    response.send('Hello World!')
  })

app.listen( port, () => console.log(`Server started at port : ${ port }`));
