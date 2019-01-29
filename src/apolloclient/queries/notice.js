const gql = require('graphql-tag')

const getLatestNotice = gql`
query {
    getLatestNotice{
      text
    }
}
`

export { 
    getLatestNotice
}