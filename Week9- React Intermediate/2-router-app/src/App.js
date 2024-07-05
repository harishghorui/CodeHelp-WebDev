import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Support from './components/Support';
import NotFound from './components/NotFound';
import { Link, NavLink } from 'react-router-dom';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact us Page</div>} />
        <Route path="/support" element={<div>Support Page</div>} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes> */}

      {/* <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/support'>Support</Link></li>
        </ul>
      </nav> */}

      {/* <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><NavLink to='/support'>Support</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/support" element={<Support/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes> */}

      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><NavLink to='/support'>Support</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader/>} >
            <Route index element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/support" element={<Support/>} />
            <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
