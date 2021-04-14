import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import GlobalStyles from './styles';
import Pages from './pages';

const client = new ApolloClient({
  uri: `http://localhost:4000`,
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
