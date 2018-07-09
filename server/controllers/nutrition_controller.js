const axios = require('axios')
var nutrition = [];
let id = 0;
const env = require('dotenv')
//https://trackapi.nutritionix.com/v2/search/instant?query=apple/'
//https://apibeta.nutritionix.com/v2/search?q=${req.body.input}&limit=1&offset=0&search_type=grocery&search_nutrient=${req.body.nutrient}

module.exports = {
    getInfo: (req, res) => {
        console.log('body', req.body);
        console.log('x-app-id', process.env.key1);
        console.log('x-app-key', process.env.key2);
        let options = { headers: { 'x-app-id': process.env.key1, 'x-app-key': process.env.key2 }};
        console.log(JSON.stringify(options));
        axios.get(`https://apibeta.nutritionix.com/v2/search?q=${req.body.input}&limit=1&offset=0&search_type=grocery&search_nutrient=carb`, options).then(
            response => {
                nutrition = response.data
                console.log('Success!!!');
                res.status(200).send(nutrition);
            })
    },

    create: (req, res) => {
        let { foodItem } = req.body;
        nutrition.push({ id: id, foodItem: foodItem });
        id++;
        res.status(200).send("Calculating data now")
    },

    update: (req, res) => {
        const { foodItem } = req.body;
        const updateID = req.params.id;
        const foodItemIndex = nutrition
            .findIndex(
                val => { return val.id == updateID });
        let val = nutrition
        [foodItemIndex];

        nutrition
        [foodItemIndex] = {
                id: val.id,
                foodItem: foodItem || val.foodItem
            }
        res.status(200).send("Modifying your item.")
    },

    delete: (req, res) => {
        const deleteID = req.params.id;
        foodItemIndex = nutrition
            .findIndex(val => val.id == deleteID);
        nutrition.splice(foodItemIndex, 1);
        res.status(200).send("Deleting your item");
    }
}