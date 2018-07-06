const express = require('express');
const bodyParser = require('body-parser');

const App = express();
//app.use --middleware that runs for every request
app.use(bodyParser.json());
// End points
app.get


//End points
const port =3005;
app.listen(port,()=> {
    console.log('Listening on port:' + port)
})