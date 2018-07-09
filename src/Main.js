import React, { Component } from 'react'
import axios from 'axios'
import Food from './Food'
import Title from './Title'
import './Main.css'
import './Food.css'
import BloodSugar from './BloodSugar'

// import App from './App'

const url = '/api/nutrition'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            nutrition: {},
            userInput: ''
        }
    }


    componentDidMount() {
        axios.get()
    }


    getNutrition() {
        let nutrientNames = ['calories', 'fat', 'carb', 'protein']
        for (let i = 0; i < nutrientNames.length; i++) {
            axios.get(url, { input: this.state.userInput, nutrient: nutrientNames[i] }).then(response => {
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


        return (

            <div>
                <style>
                    @import url('https://fonts.googleapis.com/css?family=Montserrat');
            </style>
                <div className="title">
                    <Title
                        textTitle='Carb-Sharp' />
                </div>
                <div className="mainContent" >
                    <input className="input" onChange={(e) => this.updateUserInput(e.target.value)} />
                    <button className="submit" onClick={() => this.getNutrition()}>Submit</button>
                    <Food
                        item_name={item_name}
                        thumbnail={thumbnail}
                        nutrient_uom={nutrient_uom}
                        nutrient_value={nutrient_value} />
                </div>
                <footer>
                    <BloodSugar />
                </footer>
            </div>
        )
    }
}

export default Main