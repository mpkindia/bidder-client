import React from 'react'
import { Layer } from 'grommet'
// import { Close } from 'grommet-icons'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

class ModalContainer extends React.Component {
    constructor(props){
        super()
        this.onClose = this.onClose.bind(this)
    }
    onClose() {
        this.props.modalClose()
    }
    render() {
        if(this.props.login) 
        return (
            <Layer
            position="center"
            modal
            onClickOutside={this.onClose}
            onEsc={this.onClose}
          >
          <LoginForm onClose={this.onClose} auth={this.props.authenticate}/>
          </Layer>
        )
        else if (this.props.signup) return (
            <Layer
            position="right"
            full="vertical"
            modal
            onClickOutside={this.onClose}
            onEsc={this.onClose}
          >
            <SignupForm onClose={this.onClose}/>
          </Layer>
        ) 
        else return <React.Fragment/>
    }
}


export default ModalContainer