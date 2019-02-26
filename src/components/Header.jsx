import { Box, Button, Clock, Menu, Text } from 'grommet';
import { Money } from 'grommet-icons';
import React from 'react';
import { graphql } from 'react-apollo';
import { getCurrentUser } from '../apolloclient/queries/user';
import smlogo from "../assets/logo.png";
import logo from '../assets/whatsapp-logo.svg';
class Header extends React.Component {
    render() {
        if(this.props.data.loading) return "loading..."
        let user = this.props.data.getCurrentUser
        return (
        <React.Fragment>
        <Box direction="row-responsive"
             background="neutral-1"
             pad={{vertical:'small', horizontal:'medium'}}
             elevation="medium"
             align="center"
             justify="between"
        >
        {/* <Link to="/" style={{textDecoration:'none'}}> */}
        <a href="/" style={{textDecoration:'none'}}><Box> 
        {/* <Text color="white" size="large" weight="bold">Satta Matka Bazaar </Text> */}
            <img src={smlogo} width="200px" height="50px" alt="Satta Matka Bazaar" />
        </Box></a>
        {/* </Link> */}
        <Box >
        { this.props.auth ? <Menu
            label={`${user ? user.fullname : ''}`}
            items={[
            { label: "Credit History", onClick: () => {
                this.props.history.push('/credits')
            }},
            { label: "Logout", onClick: async () => {
                await localStorage.removeItem('bid-token')
                this.props.logout()
            } }
            ]}
        /> :
        <Box direction="row" pad="small" align="end" gap="small">
        <Button onClick={this.props.loginModal}>
            <Text size="large" weight="bold">Login </Text>
        </Button>
        <Button onClick={this.props.signupModal}>
        <Text size="large" weight="bold">Register </Text>
        </Button>
        </Box>}
        </Box>
        </Box>
        <Box direction="row-responsive" background="dark-3" align="center" alignSelf="center" justify="between" pad={{vertical:"small",horizontal:"medium"}}>
            <Clock hourLimit={12} type="digital" size="large"/>
            <a href="https://api.whatsapp.com/send?phone=919024457140" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
            <Box direction="row" gap="xsmall">
                <img src={logo} alt="whatsapp_logo"/>
                <Text color="#91DC5A">Whatsapp</Text>
            </Box>
            </a>
            <Box pad={{horizontal:"medium"}} direction="row" gap="xsmall">
                <Money /> <Text> {this.props.auth ? user ? user.credits : 0: 0} </Text>
            </Box>
        </Box>
        </React.Fragment>
    ) 
}
}

export default graphql(getCurrentUser)(Header)