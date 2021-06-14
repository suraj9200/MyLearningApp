import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Annotation from './ContainerComponent/Annotation'
import store from './Store'
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Annotation />
        </div>

      </Provider>
    );
  }
}

export default App;
