import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import { HttpLink } from 'apollo-link-http'

let uri = 'http://localhost:8000/graphql'
if(process.env.NODE_ENV === 'production'){
    uri = 'https://sattamatkabazaar.com/api/graphql'
}
const httpLink = new HttpLink({ uri })

const cache = new InMemoryCache();

const authMiddleware = new ApolloLink((operation,forward)=>{
    operation.setContext({
        headers: { authorization: localStorage.getItem('bid-token') ? localStorage.getItem('bid-token') : ''
        }   
    })
    return forward(operation)
})

const stateLink = withClientState({
    cache,
});

const client = new ApolloClient({
    cache,
    link: ApolloLink.from([
        authMiddleware, stateLink, httpLink
    ])
});

export default client


