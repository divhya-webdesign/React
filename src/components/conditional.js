import React, {Component} from 'react'

class Condition extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedin: true
        }

    }

    render(){
        return(
            this.state.isLoggedin && <div>Hello divhya</div>
        )

        // return(
        //     this.state.isLoggedin?
        //     <div>Hello divhya</div>:
        //     <div>Hello guest</div>
        // )
        // let message
        // if(this.state.isLoggedin){
        //     message = <div>Hello divhya</div>
        // }
        // else{
        //     message = <div>Hello guest</div>
        // }

        // return (
        //     <div>{message}</div>
        // )
        // if(this.state.isLoggedin){
        //     return (
        //         <div>HEllo Divhya</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>HEllo guest</div>
        //     )
        // }
    }

}

export default Condition