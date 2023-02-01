import './App.css';
import Home from './pages/Home'; 
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="h-screen w-screen">
        <Router>
          <Nav/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Portfolio" element={<Portfolio/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Contact" element={<Contact/>}/>
            </Routes>
          <Footer/>
        </Router>
    </div>
  )
}

export default App
