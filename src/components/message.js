import React, {Component} from 'react'

class Message extends Component { 
    constructor(props){
        super(props)
        this.state = {
           message:"Hello"
        }
    }
    
   
   clickHandler(){
       this.setState({
           message:"Goodbye"
       })
   }

    render(){
        return (
        <div>
        <div>{this.state.message}</div>
        <button onClick={() => this.clickHandler()}>Increment</button>
        </div>
        )

    }
}

export default Message