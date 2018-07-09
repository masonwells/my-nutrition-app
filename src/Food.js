import React from 'react'
import './Food.css'


export default function Food(props) {
    return (
        <div className = "food">
            <div>
                <h1>{props.item_name}</h1>
                <p></p>
            </div>

            <div>
                <img src={props.thumbnail} />
            </div>
        </div>
    )
}





