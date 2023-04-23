import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Earphones from './pages/Earphones';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
