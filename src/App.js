import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavbarFunctionBased from './Component/NavbarFunctionBased';
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React, { Component, useState } from 'react'
import NewsFunctionBased from './Component/NewsFunctionBased';


const App = () => { 

const [progress, setProgress] = useState(0);
  
  const setProgressData=(progress) => {
    setProgress(progress = progress)
  }
   
    let pageSize = 3;
    let country = "in";
    let apiKey = process.env.REACT_APP_NEWS_API;
    return (
      <div>
        <Router>
          <NavbarFunctionBased />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route path='/' element={<NewsFunctionBased apiKeys={apiKey} setProgress={setProgressData} key="General" pageSize={pageSize} country={country} category="General" />} />
            <Route path='/business' element={<NewsFunctionBased apiKeys={apiKey} setProgress={setProgressData} key="Business" pageSize={pageSize} country={country} category="Business" />} />
            <Route path='/entertainment' element={<NewsFunctionBased apiKeys={apiKey} setProgress={setProgressData} key="Entertainment" pageSize={pageSize} country={country} category="Entertainment" />} />
            <Route path='/health' element={<NewsFunctionBased apiKeys={apiKey} setProgress={setProgressData} key="Health" pageSize={pageSize} country={country} category="Health" />} />
            <Route path='/science' element={<NewsFunctionBased apiKeys={apiKey} setProgress={setProgressData} key="Science" pageSize={pageSize} country={country} category="Science" />} />
            <Route path='/sports' element={<NewsFunctionBased apiKeys={apiKey} setProgress={setProgressData} key="Sports" pageSize={pageSize} country={country} category="Sports" />} />
            <Route path='/technology' element={<NewsFunctionBased apiKeys={apiKey} setProgress={setProgressData} key="Tchnology" pageSize={pageSize} country={country} category="Technology" />} />
          </Routes>
        </Router>
      </div>
    )
}

export default App;