import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import Services from './pages/Services';
import Projects from './pages/Projects';
import FAQ from './components/FAQ';
import Product from './pages/Product';
import BlogIndividualPage from './pages/BlogIndividualPage';
import Blog from './pages/Blog';

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Header />
        <div className="global">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/product/:productKey" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogKey" element={<BlogIndividualPage />} />

          <Route path="/faq" element={<FAQ />} />
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
  )
}

export default App
