import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const { productId } = useParams();
  const id = Number(productId);
  const productsArray = useSelector((store) => store.products);
  const { products } = productsArray;
  const product = products.find((product) => product.id === id);
  const { name } = product;

  return (
    <div>
      {name}
      <Link to="/products">return</Link>
    </div>
  );
};

export default ProductPage;
