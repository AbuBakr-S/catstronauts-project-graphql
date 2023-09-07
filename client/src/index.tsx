import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

/*
  This enables it to store and reuse query results so it doesn't have to make as many 
  network requests. This makes our app's user experience feel much snappier.
*/
const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
