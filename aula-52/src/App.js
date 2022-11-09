import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Produtos from './pages/Produtos'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" index element={ <Home /> } />
          <Route path="/sobre" element={ <Sobre /> } />
          <Route path="/produtos" index element={ <Produtos /> } />
        </Routes>
        <Footer />
      </BrowserRouter>      
    </>
  );
}

export default App;
