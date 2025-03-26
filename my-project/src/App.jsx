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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
