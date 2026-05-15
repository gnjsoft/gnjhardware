import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/common/CartDrawer';

// Pages
import { Home } from './pages/Home';
import { CategoryPage } from './pages/Category';
import { ProductDetail } from './pages/Product';
import { GlobalSupport } from './pages/Support';
import { Checkout } from './pages/Checkout';
import { SearchPage } from './pages/Search';
import { Cart } from './pages/Cart';
import { Login } from './pages/Auth/Login';
import { SignUp } from './pages/Auth/SignUp';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen bg-black text-white font-sans">
            <Navbar />
            <CartDrawer />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryId" element={<CategoryPage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/support" element={<GlobalSupport />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </main>
            
            <footer className="mt-auto">
              <Footer />
            </footer>
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}
