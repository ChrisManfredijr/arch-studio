import './App.css';
import Home from './pages/Home'; 
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="h-screen w-screen">
        <Nav/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default App
