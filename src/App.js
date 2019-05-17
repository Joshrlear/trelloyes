import React from 'react';
import './App.css';
import STORE from './src/store.js';

const listHeader = STORE.list.map(item => item.header);
const cardTitle = Object.keys(STORE.allCards).map(item => item.title);
const cardContent = Object.keys(STORE.allCards).map(item => item.content);

function App() {
    return (
        <div class="App-list">
      <section class="List">
        <header class="List-header">
          <h2>{listHeader}</h2>
        </header>
        <div class="List-cards">
          <div class="Card">
            <h3>{cardTitle}</h3>
            <p>{cardContent}</p>
          </div>
        </div>
      </section>
      </div>
    );
}


export default App;
