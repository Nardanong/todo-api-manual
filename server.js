const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
// app.use("views", "view");

// Set up routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to nodejs project TodoList!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

