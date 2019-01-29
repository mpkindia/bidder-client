const gql = require('graphql-tag')

const getCurrentUser = gql`
query {
    getCurrentUser {
        id, credits, fullname
    }
 
}
`

export {
    getCurrentUser
}