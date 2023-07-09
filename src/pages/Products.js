import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import Select from "react-select";

import { filter } from "../actions/appActions";

import "../css/ProductsList.css";

import SingleProduct from "../components/singleProduct";

const ProductsList = () => {
  const [selectValue, setSelectValue] = useState("");
  const productsArray = useSelector((store) => store.products);
  const { products, filteredProducts } = productsArray;
  const dispatch = useDispatch();

  const options = [
    { value: "all", label: <FaShoppingCart /> },
    { value: "Phones", label: "Phones" },
    { value: "Computers", label: "Computers" },
    { value: "Audio", label: "Audio" },
    { value: "Games", label: "Games" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "1px solid #ffffff80" : "1px solid #ffffff80",
      borderRadius: "4px",
      backgroundColor: state.isFocused ? "white" : "white",
      boxShadow: state.isFocused ? "black" : provided.boxShadow, 
      "&:hover": {
      border: "1px solid #ffffff80", // Zmień na dowolny kolor i styl obramowania
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

    dispatch(filter(selectedOption.value));
  };

  const displayedProducts =
    filteredProducts.length > 0 ? filteredProducts : products;

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
        <Select styles={customStyles} onChange={handleSelect} options={options} />
      </section>
      <section className="productsList">{productsList}</section>
    </div>
  );
};

export default ProductsList;
