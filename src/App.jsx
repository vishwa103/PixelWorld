import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <HashRouter>
        <Header />
        <div className="global">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        </div>
        <Footer/>
      </HashRouter>
    </div>
  )
}

export default App
