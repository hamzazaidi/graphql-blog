import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import UserList  from './components/UserList/UserList'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Posts/Post';
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>      
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/blogs" component={Posts} />
          <Route path="/bloggers" component={UserList} />          
        </Switch>        
      </Router>       
    </ApolloProvider>
  );
}

export default App;
