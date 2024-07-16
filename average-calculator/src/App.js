import React from 'react';
import './App.css';
import NumberFetcher from './NumberFetcher';

function App() {
     const link =`http://20.244.56.144/test/`;

    return (
        <div className="App">
            <header className="App-header">
                <h1>Average Calculator</h1>
                <NumberFetcher />
            </header>
        </div>
    );
}

export default App;
