import React, {useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/elements/About';
import Contactpage from './components/elements/Contact';
import Footer from './components/elements/Footer';
import Navigation from './components/elements/Navigation';
import Services from './components/elements/Service';
import Home from './components/pages/Home';
import Aos from 'aos';
import 'aos/dist/aos.css'
import NewsSection from './components/elements/CompleteNews';

function App() {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1600,
      delay: 100,
    });
  })

  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/talk" exact component={Contactpage} />
          <Route path="/news" exact component={NewsSection} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
