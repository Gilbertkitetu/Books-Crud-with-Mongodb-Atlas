//app.js

const express = require('express');

const connectDB = require('./config/db');

const app = express();

//connect database
connectDB();

app.get('/', (req, res) => res.send('Hello Gilbert How are you.....!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));