import React from 'react'
import { Box, Heading } from 'grommet'
class Settings extends React.Component {
    render () {
        return(
            <React.Fragment>
            <Box gridArea="main" background="light-1"  >
                <Box pad={{horizontal:"small"}}><Heading level="3">Settings</Heading></Box>
            
            </Box>
                
            </React.Fragment>
        )
    }
}

export default Settings