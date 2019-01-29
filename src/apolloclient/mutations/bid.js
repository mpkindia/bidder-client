const gql = require('graphql-tag')

const addBid = gql`
    mutation AddBid($bazaar_id:ID, $bazaar_type:String, $bid_type: String, $bid_number: String, $bid_value: String){
        addBid(
            bazaar_id: $bazaar_id,
            bazaar_type: $bazaar_type,
            bid_type: $bid_type,
            bid_number: $bid_number,
            bid_value: $bid_value
        ) {
            id
        }
    }
`

export {
    addBid
}