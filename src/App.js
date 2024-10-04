
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './component/Footer/Footer';
import men_banner from './component/Assets/mens_banner.png'
import women_banner from './component/Assets/women_ban.jpg'
import kid_banner from './component/Assets/kids_banner.jpg'





function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens"/>}/>
      <Route path='/womens' element={<ShopCategory banner={women_banner}  category="womens"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kid_banner}  category="kids"/>}/>
      <Route path='/product/:productId' element={<Product />} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
