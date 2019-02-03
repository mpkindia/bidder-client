import { Box, Button, Heading, Text } from 'grommet';
import React from 'react';
import { graphql } from 'react-apollo';
import { getAllBazaars } from '../apolloclient/queries/bazaar';
import BidInputWithMutation from '../components/BidBox';

const BazaarBox = ({ type, item: { open_active, name, open_time, close_active, close_time } }) => {
    if(type==='open')
    return(
        <Box
        pad="medium"
        align="center"
        margin={{vertical:"small"}}
        background={open_active ? 'neutral-1' : 'accent-4'}
        >
        <Heading level="4">{name}</Heading>
        <Text>Open: {open_time}</Text>
        </Box>    
    )
    else
    return(
        <Box
        pad="medium"
        align="center"
        margin={{vertical:"small"}}
        background={close_active ? 'neutral-1' : 'accent-4'}
        >
        <Heading level="4">{name}</Heading>
        <Text>Close: {close_time}</Text>
        </Box>
    )
}

class Single extends React.Component {
    constructor(props){
        super()
        this.state = {
            activeBid: null, // abstract the bazaar from here ,
            bazaar_id: null
        }
        this.handleOpenBid = this.handleOpenBid.bind(this)
    }
    async handleOpenBid(item){
        await this.setState({ activeBid: `${item.name}$open`, bazaar_id: item.id })
        console.log(this.state)
    }
    async handleCloseBid(item){
        await this.setState({ activeBid: `${item.name}$close`, bazaar_id: item.id  })
        console.log(this.state)
    }
    render() {
        let { loading, getAllBazaars } = this.props.data
        if(loading) return <Text>Loading</Text>

        return(
            <React.Fragment>
            { this.state.activeBid && 
                <BidInputWithMutation 
                    close={()=>this.setState({activeBid:null})}
                    bid_name={this.state.activeBid}
                    bazaar_id={this.state.bazaar_id}
                    bid_type='Single'
            />}
            <Box gridArea="main" background="light-1" >
                <Box pad={{horizontal:"small"}}><Heading level="2">Single</Heading></Box>
                <Box
                    direction="row-responsive"
                    align="center"
                    pad="small"
                    background="light-4"
                    gap="small"
                    wrap={true}
                >
                {getAllBazaars ?getAllBazaars.map((item)=>(
                    <React.Fragment >
                        <Box gap="small" direction="row">
                        <Button onClick={()=>this.handleOpenBid(item)} disabled={!item.open_active}>
                        <BazaarBox type='open' item={item} />
                        </Button>
                        <Button onClick={()=>this.handleCloseBid(item)} disabled={!item.close_active}>
                        <BazaarBox type='close' item={item}/>
                        </Button>
                        </Box>    
                    </React.Fragment>
                )): ''}
                </Box>
            </Box>
            </React.Fragment>
        )
    }
}

export default graphql(getAllBazaars)(Single)
