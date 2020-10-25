import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleList from './components/ArticleList';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <ArticleList></ArticleList>
      </div>
    </div>
  );
}

export default App;
