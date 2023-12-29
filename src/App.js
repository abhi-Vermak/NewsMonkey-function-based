import Navbar from './Component/Navbar';
import './App.css';

import React, { Component } from 'react'
import News from './Component/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      darkMode: false,
    };
  }
 
  apiKey =process.env.REACT_APP_NEWS_API_KEY

    toggleMode = () => {
    console.log(this.apiKey1);
    const { darkMode } = this.state;
    document.body.style.background = darkMode ? 'white' : '#2f3d4b';
    document.body.style.color = darkMode ? '#2f3d4b' : 'white';
    this.setState({ darkMode: !darkMode });
  };

  state=({
    progress:0
  })
  
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  
  // apiKey = "128f11f3c0314bffb6acc5d996e14681";
  render() {
    return (
      <Router>
       <Navbar mode = {this.toggleMode} darkMode ={this.state.darkMode} />
       {/* <Navbar2/> */}
       <LoadingBar
       height={3}
        color='#f11946'
        progress={this.state.progress}
      />
         <Routes>
          <Route exact path="/general" element={<News setProgress ={this.setProgress} apiKey = {this.apiKey} key={"/"} pageSize={6} darkMode={this.state.darkMode} country="in" category="general" />}/>

          <Route exact path="/" element={<News setProgress ={this.setProgress} apiKey = {this.apiKey} key={"general"} pageSize={6} darkMode={this.state.darkMode} country="in" category="general" />}/>

          <Route exact path="/business" element={<News setProgress ={this.setProgress} apiKey = {this.apiKey} key={"business"} pageSize={6} darkMode={this.state.darkMode} country="in" category="business" />}/>

          <Route exact path="/entertainment" element={<News setProgress ={this.setProgress} apiKey = {this.apiKey} key={"entertainment"} pageSize={6} darkMode={this.state.darkMode} country="in" category="entertainment"/>}/>

          <Route exact path="/health" element={<News setProgress ={this.setProgress} apiKey = {this.apiKey} key={"health"} pageSize={6} darkMode={this.state.darkMode} country="in" category="health" />}/>

          <Route exact path="/science" element={<News setProgress ={this.setProgress} apiKey = {this.apiKey} key={"science"} pageSize={6} darkMode={this.state.darkMode} country="in" category="science" />}/>

          <Route exact path="/sports" element={<News setProgress ={this.setProgress} apiKey = {this.apiKey} key={"sports"} pageSize={6} darkMode={this.state.darkMode} country="in" category="sports" />}/>
          
          <Route exact path="/technology" element={<News setProgress ={this.setProgress} apiKey = {this.apiKey} key={"technology"} pageSize={6} darkMode={this.state.darkMode} country="in" category="technology" />}/>
          </Routes>
      </Router>

    )
  }
}

