import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import NavBar from './components/NavBar';

function App() {

  const projectList = [
    { name: 'variation', id: 1},
    { name: 'spotifyaudiomotion', id: 2},
    { name: 'neurosonics', id: 5}
  ];

  return (
    <BrowserRouter>
      <div className="App">
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
