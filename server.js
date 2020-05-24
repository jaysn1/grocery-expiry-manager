const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");

const users = require("./routes/api/users");
const items = require('./routes/api/items');
const path = require('path');

const app = express();

//BodyParser Middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());

// DB config
// const MongoClient = require('mongodb').MongoClient;
const db = require('./config/keys').mongoURI;
// const client = new MongoClient(db, { useNewUrlParser: true });

// Connect to mongo
mongoose
    .connect(db , { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);
app.use('/api/items', items);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
