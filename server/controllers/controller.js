import NutritionFacts from 'nutrition-facts'
   
const NF = new NutritionFacts(process.env.USDA_NDB_API_KEY);
  
NF.searchFoods({
    q: 'salted butter',
    ds: 'Standard Reference'
}).then(results => {
    
    // Returns search results
    let mySelectedItem = userInput
    
    // Items are returned as a FoodItem instance
    // allowing you to call 'getNutrition' directly on the instance.
    mySelectedItem.getNutrition()
        .then(nutritionReport => {
            console.log(nutritionReport)
        }).catch(err => {
            console.log(err)
        })
        
}).catch(err => {
    console.log(err)
})
 
// Alternatively, if you know the NDBNO off-hand
// you can call 'getNutrition' from the NF instance.
 
NF.getNutrition('01001','b')
    .then(nutritionReport => {
        console.log(nutritionReport)
    }).catch(err => {
        console.log(err)
    })