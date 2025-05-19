import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Shop from "./Component/Pages/Shop/Shop";
import About from "./Component/Pages/About/About";
import Contact from "./Component/Pages/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Profile from "./Component/Pages/Profile/Profile";
import Cart from "./Component/Pages/Cart/Cart";
import SingleProduct from "./Component/Pages/SingleProduct/SingleProduct";
import ProductComparison from "./Component/Pages/Compare/ProductComparison";
import CheckOut from "./Component/Pages/CheckOut/CheckOut";
import Blog from "./Component/Pages/Blog/Blog";
import Auth from "./Component/Pages/Auth/Auth";
import Signin from "./Component/Pages/Signin/Signin";
import SignUp from "./Component/Pages/SignUp/SignUp";
import { AuthProvider } from "./Component/Pages/Context/AuthContext";
import i18n from "./i18n";
import LanguageSelectore from "./Component/LanguageSelectore";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <LanguageSelectore />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/prodcompare" element={<ProductComparison />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
