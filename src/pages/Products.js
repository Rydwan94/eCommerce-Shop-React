import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import '../css/ProductsList.css'

const Products = () => {
    const productsArray = useSelector(store => store.products)
    const {products} = productsArray
    

    const productsList = products.map(product => (
        <figure key={product.id}>
            <img src={product.image} alt={product.image} />
            <figcaption>
                <p>{product.price}</p>
                <Link to={`/products/${product.id}`}><button>Go</button></Link>
            </figcaption>
        </figure>
    ))
    return ( 
        <div className="productsList">
        {productsList}
        </div>
     );
}
 
export default Products;