import React, {Component} from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        // this.state = {
        //     username: '',
        //     email: '',
        //     pass: '',
        //     repass: ''
        // }
        
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })

    }
    handleEmailChange = (event)=>{
        this.setState({
            email:event.target.value
        })
    }
    handlePassChange = (event)=>{
        this.setState({
            pass:event.target.value
        })
    }
    handleRepassChange = (event)=>{
        this.setState({
            repass:event.target.value
        })
    }
    handleSubmit = event => {
        console.log(`${this.state.username} ${this.state.email}`)

        let
        
        event.preventDefault()
    }

    render(){
        return(
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" 
                    value={this.state.username}
                    onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" 
                    value={this.state.email}
                    onChange={this.handleEmailChange} />
                </div>
                <div>
                    <label>Enter Password</label>
                    <input type="password" 
                    value={this.state.pass}
                    onChange={this.handlePassChange} />
                </div>
                <div>
                    <label>Retype Password</label>
                    <input type="password" 
                    value={this.state.repass}
                    onChange={this.handleRepassChange} />
                </div>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
    
}

export default Form