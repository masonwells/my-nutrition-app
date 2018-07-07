import React, {Component} from 'react'

class Food extends Component {
    constructor(){
        super()
        this.state= {
            name:''
        }
    }


 
render(){
    const { carbName,carbValue,carbUom, proteinName,proteinValue,proteinUom,fatName,fatValue,fatUom,caloriesName,caloriesValue,caloriesUom} = this.props;

    return(
    <div>
        <div>
            <h1>{this.props.foodName}</h1>
            <p>{carbName}:{carbValue}{carbUom}</p>
            <p>{proteinName}:{proteinValue}{proteinUom}</p>
            <p>{fatName}:{fatValue}{fatUom}</p>
            <p>{caloriesName}:{caloriesValue}{caloriesUom}</p>
            
        </div>       
        
        <div>
            <img src={this.props.photo}/>
        </div>
    </div>
    )
 }   
}

export default Food



