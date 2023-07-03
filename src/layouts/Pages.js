import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products"
import About from "../pages/AboutUs"
import Error from "../pages/Error";
import ProductPage from "../pages/ProductPage";


const Pages = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products />}/>
            <Route path="/products/:productId" element={<ProductPage/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/*" element={<Error />}/>
        </Routes>
     );
}
 
export default Pages;