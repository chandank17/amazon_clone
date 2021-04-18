import React from "react";
import data from "./jsondata";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductDetails = (probs) => {
  const productdetails = data.products.find((value) => {
    return (value.id = probs.match.params.id);
  });
  return (
    <div>
      <div className="back-to-home">
        <Link to="/">Back to result</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={productdetails.image} />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{productdetails.name}</h4>
            </li>

            <li>
              {productdetails.rating} Starts ({productdetails.numrating}{" "}
              Reviews)
            </li>

            <li>Price : {productdetails.price}</li>

            <li>Description : {productdetails.description}</li>
          </ul>
        </div>
        <div className="details-cart">
          <ul>
            <li>Price : {productdetails.price}</li>
            <li>status : {productdetails.status}</li>
            <li>
              Qty :{" "}
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </li>
            <li>
              <button>Add to cart</button>
            </li>
          </ul>
        </div>
      </div>

      {/* <h1>ProductDetails {productdetails.name}</h1>
      <img src={productdetails.image} /> */}
    </div>
  );
};

export default ProductDetails;
