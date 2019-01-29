import React from 'react'
import { Box, Heading, Text } from 'grommet'
import { getAllBazaars } from '../apolloclient/queries/bazaar'
import { graphql } from 'react-apollo'
// first of all get all bazaars 
const BazaarBox = ({ type, item: {open_active, name, open_time, close_active, close_time } }) => {
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

class FullSangum extends React.Component {
    constructor(props){
        super()
        this.state = {
            activeBid: ''
        }
    }
    render() {
        let { loading, getAllBazaars } = this.props.data
        if(loading) return <Text>Loading</Text>
        console.log(getAllBazaars)
        return(
            <React.Fragment>
            <Box gridArea="main" background="light-1" >
                <Box pad={{horizontal:"small"}}><Heading level="2">Full Sangum</Heading></Box>
                <Box
                    direction="row-responsive"
                    align="center"
                    pad="small"
                    background="light-4"
                    gap="small"
                    wrap={true}
                >
                {getAllBazaars ? getAllBazaars.map((item,index)=>(
                    <React.Fragment>
                        <Box gap="small" direction="row">
                        <BazaarBox type='open' item={item} />
                        <BazaarBox type='close' item={item}/>
                        </Box>    
                    </React.Fragment>
                )): ''}
                </Box>
            </Box>
            </React.Fragment>
        )
    }
}

export default graphql(getAllBazaars)(FullSangum)
