import React, { Component } from 'react'
// import Input from ''
// import Data from ''
import axios from 'axios'
import Food from './Food'
import NutritionFacts from 'nutrition-facts'
// import App from './App'

const url = '/api/nutrition'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            nutrition: [],
            userInput: ''
        }
    }

    getNutrition() {
        axios.post(url, { input: this.state.userInput }).then(response => {
            this.setState({ nutrition: response.data })
        })
    }

    updateUserInput(event) {
        this.setState({ userInput: event });
    }



    nutrionFacts() {

        const NF = new NutritionFacts(process.env.USDA_NDB_API_KEY);

        NF.searchFoods({
            q: 'salted butter',
            ds: 'Standard Reference'
        }).then(results => {

            // Returns search results
            let mySelectedItem = this.userInput

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

    }









    render() {
        let nutritionArr = this.state.nutrition.map((e, i) => {
            return (
                <Food key={i}
                    foodName={e.food_name}
                    // serving = {e.serving_unit}
                    // quantity = {e.serving_qty}
                    photo={e.photo.thumb}
                />)
        })

        return (

            <div>
                <input onChange={(e) => this.updateUserInput(e.target.value)} />
                <button onClick={() => this.nutritionFacts()} ></button>
                {nutritionArr}
            </div>
        )
    }
}

export default Main