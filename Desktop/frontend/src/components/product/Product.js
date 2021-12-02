import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Rating from "../rating/Rating";
import "./styles.css";

const Product = ({ product, addToCartHandler }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded " style={{ background: "#eee" }}>
        <Link to={`/Product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/Product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="h3" className="d-flex ">
            <div className="my-3 m-auto">${product.price}</div>
          </Card.Text>
        </Card.Body>

        <div className="m-auto">
          {product.countInStock === 0 ? (
            <span style={{ color: "red" }}>Out Of Stock</span>
          ) : (
            <Link to={`/Product/${product._id}`}>
              <Button
                className="btnUpdate btn-sm rounded"
                variant="light"
                onClick={addToCartHandler}
              >
                view
              </Button>
            </Link>
          )}
        </div>
      </Card>
    </>
  );
};

export default Product;
