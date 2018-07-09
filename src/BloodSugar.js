import React from "react";
import axios from "axios";

export default class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      bloodSugar: [],
      userInput: ''
    };
  }

  handleChange(e) {
    this.setState({ userInput: e });
  }

  handlePost (text){
    axios.post(`api/bloodSugar`, {text: this.state.userInput})
      .then(results => {console.log(results)
        this.setState({
          bloodSugar: results.data
        });
      });
  }


  
  
  handleClick() {
    let id = 0
    let bloodSugar =  this.state.bloodSugar
    axios.put(`api/bloodSugar/${id}`, {text:this.state.userInput})
      .then(results => {
        this.setState({bloodSugar: results.data })
      });
  }


  handleDelete() {
    let id = 0
    axios.delete(`api/bloodSugar/${id}`)
      .then(results => {
        this.setState({ bloodSugar: results.data });
      });
  }

  render() {
    return (
      <div style={{ border: "solid 2px black" }}>
        <p>This is the  bloodSugar:{this.state.bloodSugar}</p>
        <input
          
          placeholder="Edit bloodSugar here!"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button onClick={() => this.handlePost()}>Post</button>
        <button onClick={() => this.handleClick()}>Edit</button>
        <button onClick={() => this.handleDelete()}>Delete</button>
      </div>
    );
  }
}