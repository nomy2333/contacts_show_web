import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import {Element} from 'react-scroll';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import Hilights from './components/Hightlights/Hilights';


import Footer from './components/header_footer/Footer';



function App() {
  
  return (
    <div className="App" style={{ height:"1500px" ,background:'white'}}>
     
      <Header/>

      <Element name="featured">
        <Featured/>
      </Element>    
       
     

      <Element name="highlights">
        <Hilights/>
      </Element>      


      
      

     
      
      <Footer/>
      
    </div>
  );
}

export default App;
