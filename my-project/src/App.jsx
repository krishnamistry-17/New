import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Component/Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Shop from "./Component/Pages/Shop/Shop";

function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/shop" element={<Shop/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
