import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Config'
import { Provider } from 'react-redux'
import createStore from './Redux'

// create our store
const store = createStore()

console.tron.log('Hello, I\'m an example of how to log via Reactotron.')

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to ReactNativeWeb</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;