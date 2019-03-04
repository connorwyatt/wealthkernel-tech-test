import React, { Component } from 'react';
import './App.css';
import { CardPlaceholder } from "./CardPlaceholder";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-headerContent">
            <h1>WealthKernel Tech Test</h1>
          </div>
        </header>

        <main className="App-body">
          <div className="App-cards">
            <div className="App-card"><CardPlaceholder /></div>
            <div className="App-card"><CardPlaceholder /></div>
            <div className="App-card"><CardPlaceholder /></div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
