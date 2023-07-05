
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import '../css/singleProduct.css'

const SingleProduct = ({ id, image, name, price }) => {

    const handleScrollToTop = () => {
        window.scrollTo(0,0)
    }

  return (
    <figure className="singleProduct">
      <img src={image} alt={name} />
      <figcaption>
        <div>
          <section>
            <p>{name}</p>
            <p>Price: {price}</p>
          </section>
          <section className="favouriteIcon">
            <AiOutlineHeart />
          </section>
        </div>
        <Link to={`/products/${id}`}>
          <button onClick={handleScrollToTop}>More info</button>
        </Link>
      </figcaption>
    </figure>
  );
};

export default SingleProduct;
