import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchProduct,
  removeSelectedProducts,
  selectedProducts,
} from "./redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.productDetail);
  const { id } = useParams();
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  // const fetchProductDetail = async () => {
  //   const detail = await axios
  //     .get(`https://fakestoreapi.com/products/${id}`)
  //     .catch((err) => console.log(err));
  //   //console.log("Res", detail.data);
  //   dispatch(selectedProducts(detail.data));
  // };

  useEffect(() => {
    //fetchProductDetail();
    dispatch(fetchProduct(id));
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [id]);

  console.log("Prod", product);
  return (
    <div className="ui grid container" style={{ paddingTop: "60px" }}>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
