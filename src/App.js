import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const  App  = () => {

  const newxApiKey = '';


  const [progress,setProgress] = useState(0);
  

  const setProgresss = (progress) =>{
    setProgress({progress:progress});
  }
 
  
    return (
      <div>
      <Router>
    <Navbar/>
     <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
    <Routes>
     <Route exact path="/" element={<News setProgress={setProgresss} key="generals" pageSize={6} newsKey={newxApiKey} category="general" setCountry="in"/>} >
      </Route>
 
          <Route exact path="/business" element={<News setProgress={setProgresss} key="business" pageSize={6} newsKey={newxApiKey} category="business" setCountry="in"/>}>
           
          </Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgresss} key="entertainment" pageSize={6} newsKey={newxApiKey} category="entertainment" setCountry="in"/>}>
           
          </Route>
          <Route  exact path="/health" element={<News setProgress={setProgresss} key="health" pageSize={6} newsKey={newxApiKey} category="health" setCountry="in"/>}>
           
          </Route>
          <Route exact path="/science" element={ <News setProgress={setProgresss} key="science" pageSize={6} newsKey={newxApiKey} category="science" setCountry="in"/>}>
         
          </Route>
          <Route exact path="/sports" element={<News setProgress={setProgresss} key="sports" pageSize={6} newsKey={newxApiKey} category="sports" setCountry="in"/>}>
           
          </Route>
          <Route exact path="/technology" element={<News setProgress={setProgresss} key="technology" pageSize={6} newsKey={newxApiKey} category="technology" setCountry="in"/>}>
           
          </Route>
         
        </Routes>
    </Router>
      </div>
    )
  }



export default App;