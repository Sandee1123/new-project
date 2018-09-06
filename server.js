const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();



app.use(bodyParser.urlencoded({ extended: false }));



app.use(express.static(path.join(__dirname, 'dist')));


var getemployee = require('./controllers/employeecontrol');

var login = require('./controllers/logincontrol');




app.use('/api', getemployee);
app.use('/validate',login);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});



const port = process.env.PORT || '3018';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));