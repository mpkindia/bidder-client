import React from 'react'
import { Box, FormField, Heading, Button, TextInput, CheckBox} from 'grommet'
import { Close } from 'grommet-icons'
import { graphql } from 'react-apollo'
import { createUser } from '../apolloclient/mutations/user'

class SignupForm extends React.Component {
    constructor(props){
        super()
        this.state= {
            username : '',
            mobile: '',
            fullname: '',
            password: '',
            cpass: '',
            checkbox: false
          }
          this.handleChange = this.handleChange.bind(this)
          this.onSubmit = this.onSubmit.bind(this)
    }
    handleChange(e) {
      let { name, value } = e.target
      this.setState({
        [name]: value
      })
    }
    async onSubmit() {
      let { username, mobile, fullname, password , cpass, checkbox} = this.state
      if(password !== cpass) return
      if(!checkbox) return 
      let out = await this.props.mutate({
        variables: {
          username, fullname, mobile, password
        }
      })
      let token = out.data.createUser
      await localStorage.setItem('bid-token', token )
      this.props.onClose()
      console.log(token)
    } 
    async componentWillMount() {
      await localStorage.removeItem('bid-token')
    }  
    render() {
        const onClose = this.props.onClose
        return(
            <Box
            as="form"
            fill="vertical"
            overflow="auto"
            width="medium"
            pad="medium"
            onSubmit={onClose}
          >
            <Box flex={false} direction="row" justify="between">
              <Heading level={2} margin="none">
                Register
              </Heading>
              <Button icon={<Close />} onClick={onClose} />
            </Box>
            <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
              <FormField label="Username">
                <TextInput placeholder="Email" name="username" value={this.state.username} onChange={this.handleChange}/>
              </FormField>
              <FormField label="Full Name">
                <TextInput name="fullname" value={this.state.fullname} onChange={this.handleChange} />
              </FormField>
              <FormField label="Mobile Number">
                <TextInput name="mobile" value={this.state.mobile} onChange={this.handleChange}/>
              </FormField>
              <FormField label="Password">
                <TextInput type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              </FormField>
              <FormField label="Confirm Password">
                <TextInput type="password" name="cpass" value={this.state.cpass} onChange={this.handleChange} />
              </FormField>
              <Box margin={{vertical:"small"}} pad="small">
                <CheckBox label="Agree & Contact Admin for Activation" checked={this.state.checkbox} 
                            onClick={()=>this.setState({checkbox: !this.state.checkbox})}/>
              </Box>
            </Box>
            <Box flex={false} as="footer" align="start">
              <Button
                type="submit"
                fill
                label="Submit"
                // onClick={onClose}
                onClick={this.onSubmit}
                primary
              />
            </Box>
          </Box>
        )    
    }
}

export default graphql(createUser)(SignupForm)
