import React, { useEffect, useState } from "react";
import { StyledProductDetails } from "../styles/styled-pages";
import { useParams } from "react-router-dom";
import { API_ROOT } from "../utils/constants";
import axios from "axios";
import { Loader } from "../components";
import { useCartContext } from "../Provider/Cart";

const ProductDetails = () => {
  const cart = useCartContext();
  const productId = useParams().id;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(product);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`${API_ROOT}/${productId}`);
        setProduct(result.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [productId]);

  const getOriginalPrice = (price, discount) => {
    return price + (price * discount) / 100;
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <StyledProductDetails>
      <div className="image-container">
        <img src={product.thumbnail} alt="product-img" />
      </div>
      <div className="content">
        <div className="header">
          <h3>{product.title}</h3>
          {cart.checkProductExists(product.id) ? (
            <button onClick={() => cart.remove(product.id)}>
              Remove From Cart
            </button>
          ) : (
            <button onClick={() => cart.add(product)}>Add to Cart</button>
          )}
        </div>
        <p>{product.description}</p>
        <p>Ratings : ⭐{product.rating} / 5</p>
        <p>
          Stock : <span>{product.stock}</span>
        </p>
        <p>Discount Offer : -{product.discountPercentage}%</p>
        <p>
          Price :{" "}
          <span className="original">
            {getOriginalPrice(product.price, product.discountPercentage)}
          </span>{" "}
          <span className="discounted">${product.price}</span>
        </p>
      </div>
    </StyledProductDetails>
  );
};

export default ProductDetails;
