import React, { Component } from 'react'
import axios from 'axios'
import Food from './Food'
import Title from './Title'

// import App from './App'

const url = '/api/nutrition'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            nutrition: {},
            userInput: '',
        }
    }


    getNutrition() {
        let nutrientNames = ['calories', 'fat', 'carb', 'protein']
        for (let i = 0; i < nutrientNames.length; i++) {
            axios.post(url, { input: this.state.userInput, nutrient: nutrientNames[i] }).then(response => {
                this.setState({ nutrition: response.data.results[0] })
            })
        }

    }
    getExtraNutritionInfo() {
        axios.post(url, { input: this.state.userInput }).then(response => {
            this.setState({ nutrition: response.data.results })
        })
    }

    updateUserInput(event) {
        this.setState({ userInput: event });
    }


    render() {
        console.log(this.state);
        let { item_name, thumbnail, nutrient_value, nutrient_uom } = this.state.nutrition;
        return(
            <div>
                <Title/>
                <input onChange={(e) => this.updateUserInput(e.target.value)} />
                <button onClick={() => this.getNutrition()}>Submit</button>
                <p>{ item_name }</p>
                <p>Carbs: { nutrient_value ? nutrient_value + nutrient_uom : '' }</p>
                <img src={ thumbnail }/>
            </div>
        ) 
    }
}

export default Main