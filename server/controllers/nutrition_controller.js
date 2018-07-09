const axios = require('axios')
var nutrition = [];
var bloodSugar = [];
let id = 0;
const env = require('dotenv')
//https://trackapi.nutritionix.com/v2/search/instant?query=apple/'
//https://apibeta.nutritionix.com/v2/search?q=${req.body.input}&limit=1&offset=0&search_type=grocery&search_nutrient=${req.body.nutrient}

module.exports = {
    getInfo: (req, res) => {
        console.log('body', req.body);
        console.log('x-app-id', process.env.key1);
        console.log('x-app-key', process.env.key2);
        let options = { headers: { 'x-app-id': process.env.key1, 'x-app-key': process.env.key2 } };
        console.log(JSON.stringify(options));
        axios.get(`https://apibeta.nutritionix.com/v2/search?q=${req.body.input}&limit=1&offset=0&search_type=grocery&search_nutrient=carb`, options).then(
            response => {
                nutrition = response.data
                console.log('Success!!!');
                res.status(200).send(nutrition);
            })
    },




    create: (req, res) => {
        // let { text } = req.body;
        console.log(req.body)
        bloodSugar = [{ id: id, bloodSugar: req.body.text }];
        id++;
        res.status(200).send(bloodSugar[0].bloodSugar)
    },

    update: (req, res) => {
        bloodSugar = [{ id: req.params.id, bloodSugar: req.body.text }];
        id++;
        res.status(200).send(bloodSugar[0].bloodSugar)
    },

    delete: (req, res) => {
        console.log(req.params.id)
        bloodSugar = [{ id: req.params.id, bloodSugar: [] }]
        res.status(200).send(bloodSugar[0].bloodSugar);
    }
}