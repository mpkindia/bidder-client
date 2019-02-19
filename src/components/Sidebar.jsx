import React from 'react'
import { Box, Button, Text } from 'grommet'
class Sidebar extends React.Component {
    render() {
        return(
            <Box gridArea="nav" background="neutral-1" >
            <Button onClick={()=>(this.props.history.push('/'))} hoverIndicator>
                <Box pad={{ horizontal: "medium", vertical: "small" }}>
                    <Text>Home</Text>
                </Box>
            </Button> 
            <Button onClick={()=>(this.props.history.push('/single'))} hoverIndicator>
                <Box pad={{ horizontal: "medium", vertical: "small" }}>
                    <Text>Single</Text>
                </Box>
            </Button> 
            <Button onClick={()=>(this.props.history.push('/jodi'))} hoverIndicator>
                <Box pad={{ horizontal: "medium", vertical: "small" }}>
                    <Text>Jodi</Text>
                </Box>
            </Button> 
            <Button onClick={()=>(this.props.history.push('/singlepatti'))} hoverIndicator>
                <Box pad={{ horizontal: "medium", vertical: "small" }}>
                    <Text>Single Patti</Text>
                </Box>
            </Button> 
            <Button onClick={()=>(this.props.history.push('/doublepatti'))} hoverIndicator>
                <Box pad={{ horizontal: "medium", vertical: "small" }}>
                    <Text>Double Patti</Text>
                </Box>
            </Button> 
            <Button onClick={()=>(this.props.history.push('/triplepatti'))} hoverIndicator>
                <Box pad={{ horizontal: "medium", vertical: "small" }}>
                    <Text>Triple Patti</Text>
                </Box>
            </Button> 
            {/* <Button onClick={()=>(this.props.history.push('/halfs'))} hoverIndicator>
                <Box pad={{ horizontal: "medium", vertical: "small" }}>
                    <Text>Half Sangum</Text>
                </Box>
            </Button> 
            <Button onClick={()=>(this.props.history.push('/fulls'))} hoverIndicator>
                <Box pad={{ horizontal: "medium", vertical: "small" }}>
                    <Text>Full Sangum</Text>
                </Box>
            </Button>  */}
            {/* <Button onClick={()=>(this.props.history.push('/credits'))} hoverIndicator>
                <Box pad={{ horizontal: "medium", vertical: "small" }}>
                    <Text>Credit History</Text>
                </Box>
            </Button>  */}
            {/* <Button onClick={()=>(this.props.history.push('/settings'))} hoverIndicator>
                <Box pad={{ horizontal: "medium", vertical: "small" }}>
                    <Text>Settings</Text>
                </Box>
            </Button>  */}
            </Box>
        )
    }
}

export default Sidebar