// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/*Dependencies*/
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;
//Spin up server
const server = app.listen(port, listening);
//Callback to debug
function listening() {
    console.log('server running');
    console.log(`running on localhost:${port}`);
};

// POST route
app.post('/', function (req, res) {
    projectData.date = req.body.date;
    projectData.temperature = req.body.main.temp;
    projectData.feelings = req.body.feelings;
    console.log('POST req is done!!!');
    res.send({});
});

// GET route returns projectData
app.get('/all', function (req, res) {
    res.send(projectData);
    console.log('GET req is done!!!')
});