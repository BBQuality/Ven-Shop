import "../styles/Home.module.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import React from 'react';
import apolloClient from "../config/apollo.config";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:3001/shop-api', // Заміни на свій API
    }),
    cache: new InMemoryCache(),
  });

  const AnyComponent = Component as any;
  return (
    <ApolloProvider client={apolloClient}>
      <AnyComponent {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;