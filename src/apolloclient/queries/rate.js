const gql = require('graphql-tag')

const getAllRates = gql`
query {
    getAllRates{
      name, rate
    }
  }
`
export { 
    getAllRates
}