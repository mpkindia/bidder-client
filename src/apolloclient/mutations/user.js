import gql from 'graphql-tag'

const createUser = gql`
    mutation CreateUser($fullname: String!, $mobile: String!, $username: String!, $password: String!) {
    	createUser(fullname:$fullname,mobile:$mobile,username:$username, password:$password)
}
`
const login = gql`
    mutation Login($username: String!, $password: String!) {
        login( username: $username, password: $password )
    }
`

export {
    createUser, login
}
