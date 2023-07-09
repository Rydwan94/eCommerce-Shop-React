import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/AboutUs"
import Error from "../pages/Error";
import ProductPage from "../pages/ProductPage";
import ProductsList from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";


const Pages = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<ProductsList />}/>
            <Route path="/products/:productId" element={<ProductPage/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/*" element={<Error />}/>
        </Routes>
     );
}
 
export default Pages;