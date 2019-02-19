import { Box, Button, FormField, Heading, TextInput } from 'grommet';
import { Close } from 'grommet-icons';
import React from 'react';
import { graphql } from 'react-apollo';
import { login } from '../apolloclient/mutations/user';
class LoginForm extends React.Component {
  constructor(props){
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.onLogin = this.onLogin.bind(this)
  }
  handleChange(e) {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  async onLogin() {
    let { username, password } =  this.state
    let out = await this.props.mutate({
      variables: {
        username, password
      }
    })
    let token = out.data.login
    console.log(token)
    await localStorage.setItem('bid-token', token)
    this.props.auth()
    this.props.onClose()
    //reloading window
    window.location.reload()
  }
  async componentWillMount() {
    await localStorage.removeItem('bid-token')
  }
  render() {
    return(
        <Box
        as="form"
        fill="vertical"
        overflow="auto"
        width="medium"
        pad="medium"
        onSubmit={this.props.onClose}
      >
        <Box flex={false} direction="row" justify="between">
          <Heading level={2} margin="none">
            Login
          </Heading>
          <Button icon={<Close />} onClick={this.props.onClose} />
        </Box>

        <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
          <FormField label="Email">
            <TextInput type="email" name="username" value={this.state.username} onChange={this.handleChange} />
          </FormField> 
          <FormField label="Password">
            <TextInput type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          </FormField>
        </Box>

        <Box flex={false} as="footer" align="start">
          <Button
            type="submit"
            label="Login"
            onClick={this.onLogin}
            primary
          />
        </Box>
      </Box>
    )
}
}

export default graphql(login)(LoginForm)