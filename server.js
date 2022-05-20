const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

// cross compatablity
app.use(cors());

// bodyParser
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routers
app.use('/',require('./routers'));


// Configure Dotenv File
dotenv.config({path: '.env'});
const PORT = process.env.PORT || 5000;

// Server Listing
app.listen(PORT,() => console.log(`Server running on http://localhost:${PORT}`));