import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppWithNavigationState from 'navigation/AppNavigator';
import { ThemeProvider } from 'emotion-theming';
import theme from 'theme/globals';
import store from './store';

type State = {
  store: any;
};

class App extends Component<null & {}, State> {
  state = {
    // create our store
    // small hack for HMR in react native
    store,
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={this.state.store}>
          <AppWithNavigationState />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
