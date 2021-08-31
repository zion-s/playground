import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  //console.log("Prod", products);
  const renderList = products?.map((product) => {
    let { id, price, title, category, image } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="ui card">
              <div className="image">
                <img
                  src={image}
                  alt={title}
                  style={{
                    width: "200px",
                    height: "200px",
                    fontSize: "1rem",
                  }}
                />
              </div>
              <div className="header">{title}</div>
              <div className="content">
                <div className="meta">
                  <span className="price">$ {price}</span>
                </div>
              </div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return renderList;
};

export default ProductComponent;
