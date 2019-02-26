import React from 'react'
import { Box, Text } from 'grommet'
import { graphql } from 'react-apollo'
import {getLatestNotice} from '../apolloclient/queries/notice'

const NoticeRenderer = ({ str }) => {
    let arr = str.split('<>')
    console.log(arr)
    return(
        <React.Fragment>
        {arr.map((item)=>(
            <React.Fragment>
            <Text>{item}</Text><br/>
            </React.Fragment>
        ))}
        </React.Fragment>
    )
}

const Footer = ({ data: { loading, getLatestNotice }}) => {
    console.log(loading, getLatestNotice)
    if(loading) return <Text> Loading ...</Text>
    return (
        <React.Fragment >
            <Box background="dark-3"
                pad={{vertical:"medium", horizontal:"large"}}
                style={{minHeight:'16vh'}} align="center"
            >
            <Text weight="bold">
                Notice 
            </Text>
            <NoticeRenderer str={getLatestNotice? getLatestNotice.text: ''}/>
            </Box>    
            <Box pad={{horizontal:"medium", vertical:"medium"}}
                   background="neutral-1"
                   elevation align="center"

            >
            <Text>2018 © sattamatkabazaar.com</Text>        
            </Box> 
            </React.Fragment>
)
}

export default graphql(getLatestNotice)(Footer)