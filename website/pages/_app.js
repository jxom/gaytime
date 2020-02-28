import * as React from 'react';
import NextApp from 'next/app';
import { Provider as FannypackProvider } from 'fannypack';

const theme = {};

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <FannypackProvider theme={theme}>
        <Component {...pageProps} />
      </FannypackProvider>
    );
  }
}
