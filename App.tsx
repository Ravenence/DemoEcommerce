import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import { AuthLayout } from './pages/Auth';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import PhonesCategory from './pages/PhonesCategory';
import PhonesSubCategory from './pages/PhonesSubCategory';
import VapesCategory from './pages/VapesCategory';
import VapesSubCategory from './pages/VapesSubCategory';
import FireworksCategory from './pages/FireworksCategory';
import FireworksSubCategory from './pages/FireworksSubCategory';
import ElectronicsCategory from './pages/ElectronicsCategory';
import ElectronicsSubCategory from './pages/ElectronicsSubCategory';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<AuthLayout />} />
            <Route path="signup" element={<AuthLayout />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="account" element={<Account />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="products" element={<Products />} />
            <Route path="phones" element={<PhonesCategory />} />
            <Route path="phones/:subcategory" element={<PhonesSubCategory />} />
            <Route path="vapes" element={<VapesCategory />} />
            <Route path="vapes/:subcategory" element={<VapesSubCategory />} />
            <Route path="fireworks" element={<FireworksCategory />} />
            <Route path="fireworks/:subcategory" element={<FireworksSubCategory />} />
            <Route path="electronics" element={<ElectronicsCategory />} />
            <Route path="electronics/:subcategory" element={<ElectronicsSubCategory />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </CartProvider>
  );
};

export default App;