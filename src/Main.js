import React, { Component } from 'react'
// import Input from ''
// import Data from ''
import axios from 'axios'
import Food from './Food'

// import App from './App'

const url = '/api/nutrition'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            nutrition: [],
            userInput: '',
            nutritionInfo: []
        }
    }


    getNutrition() {
        this.setState({
            nutrition: []
        })
        let nutrientNames = ['calories', 'fat', 'carb', 'protein']
        for (let i = 0; i < nutrientNames.length; i++) {
            console.log(nutrientNames[i])
            axios.post(url, { input: this.state.userInput, nutrient: nutrientNames[i] }).then(response => {
                if (!this.state.nutrition[0]) {
                    console.log('here')
                    this.setState({
                        nutrition: response.data.results
                    })
                } else {
                    let nutrientName = nutrientNames[i]
                    this.state.nutrition[0][nutrientName] = {
                        nutritionValue: response.data.results[0].nutrient_value,
                        nutritionName: response.data.results[0].nutrient_name,
                        nutritionUom: response.data.results[0].nutrient_uom
                    }
                }
            })
        }
        console.log(this.state.nutrient)
    }
    getExtraNutritionInfo() {
        axios.post(url, { input: this.state.userInput }).then(response => {
            this.setState({ nutrition: response.data.results })
            console.log(this.state.nutrition)
        })

    }

    updateUserInput(event) {
        this.setState({ userInput: event });
    }


    render() {

        let nutritionArr = this.state.nutrition.map((e, i,arr) => { console.log(this.state.nutrition)
            return (
                <Food key={i}
                    foodName={e.item_name}
                    carbValue={this.state.nutrition[0].carb.nutritionValue}
                    carbName={this.state.nutrition[0].carb.nutritionName}
                    carbUom={this.state.nutrition[0].carb.NutritionUom}
                    caloriesValue={this.state.nutrition[0].calories.nutritionValue}
                    caloriesName={this.state.nutrition[0].calories.nutritionName}
                    caloriesUom={this.state.nutrition[0].calories.nutritionUom}
                    fatValue={this.state.nutrition[0].fat.nutritionValue}
                    fatName={this.state.nutrition[0].fat.nutritionName}
                    fatUom={this.state.nutrition[0].fat.nutritionUom}
                    proteinValue={this.state.nutrition[0].protein.nutritionValue}
                    proteinName={this.state.nutrition[0].protein.nutritionName}
                    proteinUom={this.state.nutrition[0].protein.nutritionUom}
                    photo={e.thumbnail}
                />)
        })


        return (

            <div>
                <input onChange={(e) => this.updateUserInput(e.target.value)} />
                <button onClick={() => this.getNutrition()} ></button>
                {nutritionArr}
            </div>
        )
    }
}

export default Main