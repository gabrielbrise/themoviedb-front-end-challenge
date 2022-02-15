import { ApolloClient } from 'apollo-client';
import { from } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';

const GRAPHQL_API_ROOT_ENDPOINT = process.env.GRAPHQL_API_ROOT_ENDPOINT || 'http://localhost:2020/graphql'

const memoryCache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: GRAPHQL_API_ROOT_ENDPOINT
});

const stateLink = withClientState({
  cache: memoryCache,
  resolvers: {}
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, status }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const client = new ApolloClient({
  link: from([errorLink, httpLink, stateLink]),
  cache: memoryCache
});

export default client;
