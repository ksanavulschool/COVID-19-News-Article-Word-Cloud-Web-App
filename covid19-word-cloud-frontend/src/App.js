import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleList from './components/ArticleList';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='title'>
          CS321 COVID Word Cloud News
        </div>
      </div>
      <div className='content'>
        <div className='about'>
          <div className='subtitle'>
            Background
          </div>
          <div className='background'>
            COVID has caused many massive changes to our society and how it functions. Undoubtably the most important projects would have to do with staying safe in a COVID world, however, we felt that there is a massive piece of COVID’s impact that has been overlooked. This oversight is related to the cultural impact that COVID has had on society. The scale of the impacts is obvious when you look at all the small businesses that are now closed or running in a limited fashion.
          </div>
          <br/>
          <div className='subtitle'>
            Our Mission
          </div>
          <div className='mission'>
            We felt that a good way to measure and visualize the cultural impact that COVID has had on our society is to create a web application that takes news articles, especially those related to COVID, via an API and generates word clouds for each of them. The website would display word clouds for recent articles and provide links to those articles in case a reader is interested. Using word clouds as a visualization tool would allow a reader to see cultural differences across news organizations and cultural shifts within a news organization over time.
          </div>
        </div>
        <div className='subtitle'>
          Articles
        </div>
        <ArticleList></ArticleList>
      </div>
    </div>
  );
}

export default App;
