import React from 'react'


export default function Food(props) {
    return (
        <div>
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





