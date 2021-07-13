import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Projects from './components/project/project';
import About from './components/about/about';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
    <div className="App">
     <Header />
     <Navbar />
     <Route exact path ='/' component={About} />
     <Route exact path='/projects' component={Projects} />
    <Footer />
    </div>
    </Router>
  );
}

export default App;
