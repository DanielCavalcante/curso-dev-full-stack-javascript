import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateProduct from './pages/product/CreateProduct'
import ListProducts from './pages/product/ListProducts'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index  element={<Home />} />
          <Route path='/products' element={<ListProducts />} />
          <Route path='/products/create' element={<CreateProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
