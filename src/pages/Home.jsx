import React from 'react'
import { Box, Text, Tabs, Tab } from 'grommet'
// import { Route, Switch, Link } from 'react-router-dom'
import ResultBox from '../components/ResultBox'
// import Single from './Single'
import PreviousBids from '../components/PreviousBids'
import GameRates from '../components/Rates'
class Home extends React.Component {
    constructor(props){
        super(props)
        this.onActive = this.onActive.bind(this)
        this.state = {
            sidebar: true,
            index: 0
        }
    }
    onActive = index => this.setState({ index });
    render() {
        return(
            <React.Fragment> 
           <Box gridArea="main" background="light-1" pad={{vertical:"medium"}} >
            <Tabs activeIndex={this.state.index} onActive={this.onActive} >
                    
                    <Tab title={<Text size="large">Game Results</Text>}>
                        <Box pad={{vertical:"small"}}/>
                        <ResultBox />
                    </Tab>
                    <Tab title={<Text size="large">Game Rates </Text>}>
                        <GameRates />
                    </Tab>
                    { this.props.auth &&
                    <Tab title={<Text size="large">Previous Bids</Text>}>
                        <PreviousBids />
                    </Tab> 
                    }
            </Tabs> 
            </Box>
        </React.Fragment>
        
        )
    }
}

export default Home

