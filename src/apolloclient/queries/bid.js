const gql = require('graphql-tag')

const getAllUserBids = gql`
    query {
        getAllUserBids {
             bazaar_name, bid_type, bid_value, bid_number,
             bazaar_type,created_at
        }
    }
`

export { 
    getAllUserBids
}