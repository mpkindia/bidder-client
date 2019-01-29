import React from 'react'
import { Box, Text, Table, TableHeader, TableRow, TableCell, TableBody } from 'grommet'
import { graphql } from 'react-apollo'
import { getAllRates } from '../apolloclient/queries/rate'

class GameRates extends React.Component {
  render() {
    const { data: { loading, getAllRates }} = this.props
    console.log(getAllRates)
    if (loading) return <Text>Loading...</Text>
    return (
      <div>
        <Box pad="medium" align="center" background="light-2" fill>
            <Table>
            <TableHeader>
                <TableRow >
                    <TableCell>
                        Game Type
                    </TableCell>
                    <TableCell>
                        Rate 
                    </TableCell>
                </TableRow>
            </TableHeader>
            <TableBody>
            {getAllRates ? getAllRates.map((item, index)=>(
            <TableRow>
                <TableCell>
                    {item.name}
                </TableCell>
                <TableCell>
                {item.rate}                    
                </TableCell>
            </TableRow>
            )): ''}
            </TableBody>
            </Table>
        </Box>
      </div>
    );
  }
}
export default graphql(getAllRates)(GameRates)

