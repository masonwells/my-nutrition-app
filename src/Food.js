import React from 'react'
import './Food.css'


export default function Food(props) {
    let {item_name,thumbnail,nutrient_value,nutrient_uom} = props;
    return (
        <div>
            <div className = "info">
            <h1>{props.item_name}</h1>
            <p> Carbs:  { props.nutrient_value ? props.nutrient_value + props.nutrient_uom : '' }</p>
            </div>
            <div className = "image">
            <img src={ props.thumbnail }/>
            </div>
        </div>
    )
}





