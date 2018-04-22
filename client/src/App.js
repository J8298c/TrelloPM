import React, { Component } from 'react';
import './App.css';
import RouterComponent from './RouterComponent';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterComponent />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
