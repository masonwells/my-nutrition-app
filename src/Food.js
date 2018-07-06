import React, {Component} from 'react'

class Food extends Component {
    constructor(){
        super()
        this.state= {
            name:''
        }
    }

 render(){
    return(
        <div>
            <div>
                {this.props.foodName}
                {/* {this.props.serving} */}
            </div>
            <div>
                <img src={this.props.photo}/>
            </div>
        </div>
    )
 }   
}

export default Food
