import React, {Component} from 'react'
import ChildCompo from './child'

class Welcome extends Component {
    constructor(props){
        super(props)
        this.state= {
            message:"Hands off SHE'S MINE"
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
        alert(`You there ${this.state.message}`)
    }

    render(){
        return(
                <ChildCompo greetHandler={this.greetParent} />
        )
    }
}

export default Welcome