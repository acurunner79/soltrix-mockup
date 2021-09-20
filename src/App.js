import Hamburger from './nav/Hamburger';
import TopNav from './nav/TopNav';
import Footer from './footer/index'
import Bio from './components/Bio';
import Contact from './components/Contact';
import Events from './components/Events';
import Home from './components/Home';
import Music from './components/Music';
import News from './components/News';
import { Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div>
      <TopNav />
      <Hamburger />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/bio">
        <Bio />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/events">
        <Events />
      </Route>
      <Route exact path="/music">
        <Music />
      </Route>
      <Route exact path="/news">
        <News />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
