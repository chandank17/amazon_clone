import React from "react";
import "./scss/home.scss";
import data from "./jsondata";
import { BrowserRouter, Link, Switch, Router } from "react-router-dom";

const Content = () => {
  return (
    <div className="main">
      <div className="content">
        <ul className="products">
          {data.products.map((product) => {
            return (
              <li key={product.id}>
                <Link to={"/product/" + product.id}>
                  <div className="product">
                    <img src={product.image} />
                    <div className="product-name">{product.name}</div>
                    <div className="product-brand"> {product.brand}</div>
                    <div className="product-price"> {product.rating}</div>
                    <div className="product-rating">
                      {product.rating} Stars ({product.numrating} Reviews)
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Content;
