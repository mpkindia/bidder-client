import { Box, Grid, Grommet } from 'grommet';
// import { hp } from 'grommet-theme-hp';
import { hpe } from 'grommet-theme-hpe';
import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ModalContainer from './components/ModalContainer';
import Sidebar from './components/Sidebar';
// import Misc from './pages/Misc';
// import Settings from './pages/Settings';
import CreditHistory from './pages/CreditHistory';
import DoublePatti from './pages/DoublePatti';
// import FullSangum from './pages/FullSangum';
// import HalfSangum from './pages/HalfSangum';
import Home from './pages/Home';
import Jodi from './pages/Jodi';
import Single from './pages/Single';
import SinglePatti from './pages/SinglePatti';
import TriplePatti from './pages/TriplePatti';



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
          <Grommet theme={hpe}>
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
            {/* <PrivateRoute exact path="/fulls" component={FullSangum} />
            <PrivateRoute exact path="/halfs" component={HalfSangum} /> */}
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
