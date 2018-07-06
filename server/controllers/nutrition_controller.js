const axios = require('axios')
var nutrition=[];
let id=0;
const env = require('dotenv')
//https://trackapi.nutritionix.com/v2/search/instant?query=apple/'

module.exports = {
read: (req,res) =>{
    console.log(req.body)
    axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=${req.body.input}&detailed=true`, {headers:{
        'x-app-id':process.env.key1,
        'x-app-key':process.env.key2
    }}).then(
        response => { 
            nutrition=response.data.common
    res.status(200).send(nutrition);
        })
    
   },
create:(req,res) =>{
       let {foodItem} = req.body;
       nutrition.push({id:id,foodItem:foodItem});
       id++;
       res.status(200).send("Calculating data now"+JSON.stringify(nutrition
    ))
   },

update:(req,res) =>{
       const {foodItem} = req.body;
       const updateID = req.params.id;
       const foodItemIndex = nutrition
    .findIndex(
           val => {return val.id == updateID});
       let val = nutrition
    [foodItemIndex];

       nutrition
    [foodItemIndex] = {
           id: val.id,
           foodItem: foodItem || val.foodItem
       }
       res.status(200).send(
           "Modifying your item."+JSON.stringify(nutrition));
   },
   
delete:(req,res) =>{
       const deleteID = req.params.id;
       foodItemIndex=nutrition
    .findIndex(val => val.id == deleteID);
       nutrition.splice(foodItemIndex,1);
       res.status(200).send("Deleting your item"+JSON.stringify(nutrition
    ));
   }
}