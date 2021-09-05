import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchProducts, setProducts } from "./redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   let response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => console.log(err));
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    //fetchProducts();
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="ui grid container" style={{ paddingTop: "60px" }}>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
