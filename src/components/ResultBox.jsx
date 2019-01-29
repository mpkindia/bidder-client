import React from 'react'
import { Box, Text, Heading } from 'grommet'
import { graphql } from 'react-apollo'
import { getAllBazaars } from '../apolloclient/queries/bazaar'

const ResultBox = ({ data }) => {
    // console.log(data)
    return (
        <Box
          pad="medium"
          align="center"
          margin={{vertical:"small"}}
          background={{ color: "neutral-1", opacity: "strong" }}
          round
        >
          <Heading level="3">{data.name}</Heading>
          <Heading level="2">{data.result}</Heading>
          <Text>Open: {data.open_time}</Text>
          <Text>Close: {data.close_time}</Text>
        </Box>
    )
}

const ResultList = ({ data: { loading, getAllBazaars }}) => {
    if(loading) return 'Loading...'
    // console.log(getAllBazaars)
    const amlist = []; const pmlist = []; 
    getAllBazaars.map((item)=> { item.open_time.includes('AM') ? amlist.push(item) : pmlist.push(item)}) 
    amlist.sort((a,b) => a.open_time - b.open_time )
    pmlist.sort((a,b)=> {
      console.log(a.open_time-b.open_time)
      return(a.open_time - b.open_time)
    })
    console.log(pmlist)
    let list = [...amlist, ...pmlist]
    return (
        <Box
          direction="row-responsive"
          align="center"
          pad="small"
          background="light-4"
          gap="small"
          wrap={true}
        >
        {list ? list.map((item, index)=>
          <ResultBox data={item} />        
        ): ''}

        </Box>
    )
}

export default graphql(getAllBazaars)(ResultList)