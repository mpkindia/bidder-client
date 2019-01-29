import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Grommet, Box, Grid } from 'grommet'
import { hp } from 'grommet-theme-hp'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ModalContainer from './components/ModalContainer';
import Single from './pages/Single';
import Jodi from './pages/Jodi';
import SinglePatti from './pages/SinglePatti';
import DoublePatti from './pages/DoublePatti';
import TriplePatti from './pages/TriplePatti';
import HalfSangum from './pages/HalfSangum';
import FullSangum from './pages/FullSangum';
import Sidebar from './components/Sidebar';
// import Misc from './pages/Misc';
// import Settings from './pages/Settings';
import CreditHistory from './pages/CreditHistory';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props)=>(
      localStorage.getItem('bid-token') ? (< Component {...props}/>) : 
          <Redirect to ="/"/>    
  )}/>
)

class Routes extends Component {
  constructor(props){
    super(props)
    this.state = {
       loginModal: false,
       signupModal: false,
       auth: this.props.authx,
      }
  }
  render() {
    return (
        <Router>
          <Grommet theme={hp}>
          <Route path="/" render={(props)=> 
                    <Header {...props} auth={this.state.auth} logout={()=>this.setState({ auth: false })}
                              loginModal={()=>this.setState({loginModal:true})} 
                              signupModal={()=>this.setState({signupModal:true})} 
          />} />
          <Box >
          <Box >
            <Grid
            fill
            areas={[
                { name: "nav", start: [0, 0], end: [0, 0] },
                { name: "main", start: [1, 0], end: [1, 0] }
            ]}
            columns={["15vw", "flex"]}
            rows={["flex"]}
            // gap="small"
            >
            <Route path="/" render={(props)=><Sidebar {...props}/>} />
          <Switch>
            <Route exact path="/" render={(props)=> <Home {...props} auth={this.state.auth} /> } />
            <PrivateRoute exact path="/single" component={Single} />
            <PrivateRoute exact path="/jodi" component={Jodi} />
            <PrivateRoute exact path="/singlepatti" component={SinglePatti} />
            <PrivateRoute exact path="/doublepatti" component={DoublePatti} />
            <PrivateRoute exact path="/triplepatti" component={TriplePatti} />
            <PrivateRoute exact path="/fulls" component={FullSangum} />
            <PrivateRoute exact path="/halfs" component={HalfSangum} />
            {/* <Route exact path="/settings" component={Settings} /> */}
            <PrivateRoute exact path="/credits" component={CreditHistory} />
          </Switch>
            </Grid>
            </Box>

          <ModalContainer login={this.state.loginModal}  signup={this.state.signupModal}
                  modalClose={()=>{this.setState({
                              loginModal: false, 
                              signupModal: false})}}
                  authenticate={()=>{this.setState({ auth: true })}}            
          />
            </Box>
          <Footer />
          </Grommet>
        </Router>
      )
    }  
}

export default Routes
