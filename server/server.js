require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const url = 'https://trackapi.nutritionix.com/v2/search/instant?query='
const app = express();
//app.use --middleware that runs for every request
app.use(bodyParser.json());
// End points
const origin = '/api/nutrition'
const blood = '/api/bloodSugar'
const nutritionController = require('./controllers/nutrition_controller.js')
// app.post(origin,nutritionController.getInfo)


app.get(origin, nutritionController.getInfo)


app.post(`${blood}`, nutritionController.create)
app.put(`${blood}/:id`, nutritionController.update)
app.delete(`${blood}/:id`, nutritionController.delete)
//End points
app.listen(process.env.SERVER_PORT, () => {
    console.log('Listening on port:' + process.env.SERVER_PORT)
});



