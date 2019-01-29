const gql = require('graphql-tag')

const getAllBazaars = gql`
    query {
        getAllBazaars {
            id, result, name, open_time, close_time, open_active, close_active
        }
    }
`

export { getAllBazaars }