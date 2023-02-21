import React from "react"

class InputState extends React.Component{
    constructor(){
        super()
        this.state={
            welcome:"Hi 👋",
            display:false
        }
    }

     ChangeState = ()=> {
        this.setState({welcome : "hi! " })
    }

    Toggle = ()=>{
        this.setState({display:!this.state.display})
    }

    MessageHide = {
        display : "none",
        color:"red"
    }
    MessageShow = {
        display : "flex",
        color:"red"
    }

    render()
{
    return( <>
    <input onChange={(event) => {this.setState({welcome: event.target.value})}}/> 
    <h3 style={this.state.display ? this.MessageShow:this.MessageHide} >{this.state.welcome}</h3>
    <button onClick={ this.ChangeState}>Change State</button>
    <button onClick={ this.Toggle}  >Toggle State</button>

    </>)
}        

}

export default InputState;