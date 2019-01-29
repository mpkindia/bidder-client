import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.jsx';
import client from './apolloclient/index'
import { ApolloProvider } from 'react-apollo'
// import 'grommet-css'
 
const App = () => {
    let authStatus 
    let token =  localStorage.getItem('bid-token') 
    if( token && token.length>0 && token.split(' ')[0] ==='Bearer')
        authStatus = true
    else authStatus = false
    return(
        <ApolloProvider client={client}>
            <Routes authx={authStatus}/>
        </ApolloProvider>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));

