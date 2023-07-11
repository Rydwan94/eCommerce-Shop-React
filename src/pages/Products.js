import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import Select from "react-select";

import { filter, filterFavouritesProducts } from "../actions/appActions";

import "../css/ProductsList.css";

import SingleProduct from "../components/singleProduct";

const ProductsList = () => {
  const [selectValue, setSelectValue] = useState("");
  const productsArray = useSelector((store) => store.products);
  const { products, filteredProducts } = productsArray;
  const dispatch = useDispatch();

  console.log(filteredProducts)
  const options = [
    { value: "all", label: "All" },
    { value: "Phones", label: "Phones" },
    { value: "Computers", label: "Computers" },
    { value: "Audio", label: "Audio" },
    { value: "Games", label: "Games" },
    { value: "Favourites", label: "Favourites" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "1px solid #ffffff80" : "1px solid #ffffff80",
      borderRadius: "4px",
      backgroundColor: state.isFocused ? "white" : "white",
      boxShadow: state.isFocused ? "black" : provided.boxShadow,
      "&:hover": {
        border: "1px solid #ffffff80",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#005b5c" : "white",
      color: state.isSelected ? "white" : "black",
    }),
  };

  const handleSelect = (selectedOption) => {
    setSelectValue(selectedOption.value);

    if (selectedOption.value === "Favourites") {
      return dispatch(filterFavouritesProducts());
    }
    return dispatch(filter(selectedOption.value));
  };

  const displayedProducts =
    filteredProducts.length > 0 ? filteredProducts : [];

  const productsList = displayedProducts.map((product) => (
    <SingleProduct key={product.id} {...product} />
  ));
  console.log(selectValue);
  return (
    <div className="productsContainer">
      <section className="productsInfo">
        <h2>
          Search <span>Products</span>
        </h2>
        <Select
          styles={customStyles}
          onChange={handleSelect}
          options={options}
        />
      </section>
      <section className="productsList">{productsList}</section>
    </div>
  );
};

export default ProductsList;
