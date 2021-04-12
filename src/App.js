import React from 'react'
import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";

import Home from './pages/Home';
import Adopt from './pages/Adopt';
import Blog from './pages/Blog';
import Navbar from './components/Navibar';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Footer from '../src/components/Footer'


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/adopt' component={Adopt} />
        <Route path='/blog' component={Blog} />
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/contact' component={Contact} />
        <Footer />
      </Router>
    
    
      
      
      
    </div>
  );
}

export default App;



